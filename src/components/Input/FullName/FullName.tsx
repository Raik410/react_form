import { useState, FC } from "react";
import { AutoComplete, Form } from "antd";
import { fetchSuggestions } from "../../../api/dadata/fetchSuggersion";
import { useDebounce } from "../../../hooks/useDebounce";
import { Suggestion } from "../../../api/dadata/fetchSuggersion";

interface IOption {
  value: string;
  label: string;
}

type checkFullNameType = {
  name?: string | null;
  surname?: string | null;
  patronymic?: string | null;
};

const FullName: FC = () => {
  const [options, setOptions] = useState<Array<IOption>>([]);
  const [checkFullName, setCheckFullName] = useState<checkFullNameType>({});

  const handleSearch = async (value: string): Promise<void> => {
    const suggestions: Suggestion[] = await fetchSuggestions(value);
    setOptions(
      suggestions.map((suggestion) => ({
        value: suggestion.value,
        label: suggestion.value,
      })),
    );
    if (suggestions.length > 0) {
      setCheckFullName({
        name: suggestions[0].data.name,
        surname: suggestions[0].data.surname,
        patronymic: suggestions[0].data.patronymic,
      });
    }
  };

  const debouncedFetchSuggestions = useDebounce(handleSearch, 275);

  return (
    <Form.Item
      name="fullname"
      label="Фамилия Имя Отчество"
      rules={[
        { required: true, message: "Введите ваше полное имя" },
        { min: 5, max: 50, message: "Длина должна быть от 5 до 50 символов" },
        { whitespace: true },
        () => ({
          validator(_, value) {
            if (
              !value ||
              checkFullName.name === null ||
              checkFullName.patronymic === null ||
              checkFullName.surname === null
            ) {
              return Promise.reject(new Error("ФИО не полное"));
            }
            return Promise.resolve();
          },
        }),
      ]}
      hasFeedback={true}
    >
      <AutoComplete
        allowClear
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSearch={debouncedFetchSuggestions}
        options={options}
        placeholder="Иванов Иван Иванович"
      />
    </Form.Item>
  );
};

export default FullName;

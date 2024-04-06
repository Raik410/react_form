import { useState, FC } from "react";
import { AutoComplete, Form } from "antd";
import { fetchSuggestions } from "../../../api/dadata/fetchSuggersion";
import { useDebounce } from "../../../hooks/useDebounce";
import { Suggestion } from "../../../api/dadata/fetchSuggersion";

interface PropsFullName {
  value: string;
  onChange: (value: string) => void;
}

const FullName: FC<PropsFullName> = ({ value, onChange }) => {
  const [options, setOptions] = useState<
    Array<{ value: string; label: string }>
  >([]);

  const handleSearch = async (value: string): Promise<void> => {
    const suggestions: Suggestion[] = await fetchSuggestions(value);
    setOptions(
      suggestions.map((suggestion) => ({
        value: suggestion.value,
        label: suggestion.value,
      })),
    );
  };

  const handleSelect = (value: string) => {
    onChange(value);
  };

  const debouncedFetchSuggestions = useDebounce(handleSearch, 500);

  return (
    <Form.Item
      name="fullname"
      label="Fullname"
      rules={[
        { required: true, message: "Please input your full name." },
        { min: 5 },
        { whitespace: true },
      ]}
    >
      <AutoComplete
        value={value}
        onSelect={handleSelect}
        onSearch={debouncedFetchSuggestions}
        options={options}
        placeholder="Введите ФИО"
      />
    </Form.Item>
  );
};

export default FullName;

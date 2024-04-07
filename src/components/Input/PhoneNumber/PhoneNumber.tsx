import { Input, Form } from "antd";
import { FC } from "react";

interface PropsPhoneNumber {
  value: string;
  onChange: (value: string) => void;
}

export const PhoneNumber: FC<PropsPhoneNumber> = ({ value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const cleanValue = value.replace(/\D+/g, "");

    let formattedValue = "+7 ";
    if (cleanValue.startsWith("7")) {
      formattedValue += cleanValue
        .slice(1)
        .replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, "$1 $2 $3 $4")
        .trim();
    } else {
      formattedValue += cleanValue
        .replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, "$1 $2 $3 $4")
        .trim();
    }

    onChange(formattedValue);
  };

  return (
    <Form.Item
      name="phone"
      label="Номер телефона"
      hasFeedback={true}
      rules={[
        { required: true, message: "Пожалуйста введите ваш номер." },
        { whitespace: true },
        {
          pattern:
            /^(?:\+7|8)[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/,
          message: "Номер должен быть в формате +7 XXX XXX XX XX.",
        },
      ]}
    >
      <Input
        value={value}
        onChange={handleChange}
        placeholder="+7 999 999 99 99"
        autoComplete="tel"
        maxLength={18}
      />
    </Form.Item>
  );
};

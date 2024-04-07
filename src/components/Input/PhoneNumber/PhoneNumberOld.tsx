import { Input, Form } from "antd";
import { FC } from "react";

interface PropsPhoneNumber {
  value: string;
  onChange: (value: string) => void;
}

export const PhoneNumberOld: FC<PropsPhoneNumber> = ({ value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    onChange(value);
  };

  return (
    <Form.Item
      name="phone"
      label="Номер телефона"
      hasFeedback={true}
      rules={[
        { required: true, message: "Пожалуйста введите ваш номер." },
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

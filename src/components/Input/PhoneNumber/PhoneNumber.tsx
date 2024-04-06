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
      label="Phone Number"
      rules={[
        { required: true, message: "Please input your phone number." },
        { whitespace: true },
        {
          pattern: /^\+7 \d{3} \d{3} \d{2} \d{2}$/,
          message: "Phone number must be in the format +7 XXX XXX XX XX.",
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

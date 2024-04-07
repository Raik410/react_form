import PhoneInput from "antd-phone-input";
import FormItem from "antd/es/form/FormItem";

interface IValid {
  valid: () => boolean;
}

const validator = (_: unknown, { valid }: IValid) => {
  if (valid()) return Promise.resolve();
  return Promise.reject("Введите корректный номер телефона.");
};

const PhoneNumber = () => {
  return (
    <FormItem
      label="Номер телефона"
      name="phone"
      rules={[
        { required: true, message: "Пожалуйста введите ваш номер." },
        { validator },
      ]}
      hasFeedback
    >
      <PhoneInput allowClear autoComplete="tel" type="tel" enableSearch />
    </FormItem>
  );
};

export default PhoneNumber;

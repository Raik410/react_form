import { Form, DatePicker } from "antd";

const DateBirth = () => {
  return (
    <Form.Item
      name="dateofbirth"
      label="Дата рождения"
      rules={[
        { required: true, message: "Пожалуйста введите вашу дату рождения." },
      ]}
    >
      <DatePicker allowClear picker="date" placeholder="2000-01-01" />
    </Form.Item>
  );
};

export default DateBirth;

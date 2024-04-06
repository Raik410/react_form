import { Form, DatePicker } from "antd";

const DateBirth = () => {
  return (
    <Form.Item
      name="dateofbirth"
      label="Date of birth"
      rules={[{ required: true }]}
    >
      <DatePicker picker="date" placeholder="Pick a date" />
    </Form.Item>
  );
};

export default DateBirth;

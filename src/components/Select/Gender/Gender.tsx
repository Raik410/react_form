import { Form, Select } from "antd";

const { Option } = Select;

const Gender = () => {
  return (
    <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
      <Select placeholder="Select your gender" allowClear>
        <Option value="male">Мужчина</Option>
        <Option value="female">Женщина</Option>
        <Option value="other">Другое</Option>
      </Select>
    </Form.Item>
  );
};

export default Gender;

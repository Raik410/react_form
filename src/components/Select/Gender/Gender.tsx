import { Form, Select } from "antd";

const { Option } = Select;

const Gender = () => {
  return (
    <Form.Item name="gender" label="Пол" hasFeedback={true}>
      <Select placeholder="Ваш пол" allowClear>
        <Option value="male">Мужчина</Option>
        <Option value="female">Женщина</Option>
        <Option value="other">Другое</Option>
      </Select>
    </Form.Item>
  );
};

export default Gender;

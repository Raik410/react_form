import { Form, Select } from "antd";

const { Option } = Select;

const Doctor = () => {
  return (
    <Form.Item name="doctor" label="Doctor" rules={[{ required: true }]}>
      <Select placeholder="Лечащий врач" allowClear>
        <Option value="Петров">Мужчина</Option>
        <Option value="Захаров">Женщина</Option>
        <Option value="Черниговская">Другое</Option>
      </Select>
    </Form.Item>
  );
};

export default Doctor;

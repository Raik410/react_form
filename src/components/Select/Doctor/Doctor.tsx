import { Form, Select } from "antd";

const { Option } = Select;

const Doctor = () => {
  return (
    <Form.Item name="doctor" label="Лечащий врач">
      <Select placeholder="Лечащий врач" allowClear>
        <Option value="Петров">Петров</Option>
        <Option value="Захаров">Захаров</Option>
        <Option value="Черниговская">Черниговская</Option>
      </Select>
    </Form.Item>
  );
};

export default Doctor;

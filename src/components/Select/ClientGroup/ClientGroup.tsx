import { Form, Select, SelectProps } from "antd";

const options: SelectProps["options"] = [
  { value: "VIP", label: "VIP" },
  { value: "Проблемные", label: "Проблемные" },
  { value: "ОМС", label: "ОМС" },
  { value: "ДМС", label: "ДМС" },
];

const ClientGroup = () => {
  return (
    <Form.Item
      name="cliendgroup"
      label="Ваша группа"
      rules={[{ required: true, message: "Пожалуйста выберите вашу группу." }]}
    >
      <Select
        allowClear
        mode="tags"
        // style={{ width: "100%" }}
        placeholder="Выберите справа"
        options={options}
      />
    </Form.Item>
  );
};

export default ClientGroup;

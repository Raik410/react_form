import { Form, Select, SelectProps } from "antd";

const options: SelectProps["options"] = [
  { value: "VIP", label: "VIP" },
  { value: "Проблемные", label: "Проблемные" },
  { value: "ОМС", label: "ОМС" },
  { value: "ДМС", label: "ДМС" },
];

const ClientGroup = () => {
  return (
    <Form.Item name="cliendgroup" label="Ваша группа">
      <Select
        mode="tags"
        // style={{ width: "100%" }}
        placeholder="Выберите справа"
        options={options}
      />
    </Form.Item>
  );
};

export default ClientGroup;

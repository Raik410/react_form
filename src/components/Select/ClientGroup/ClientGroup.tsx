import { Form, Select, SelectProps } from "antd";

const options: SelectProps["options"] = [{ value: "lucy", label: "Lucy" }];

const ClientGroup = () => {
  return (
    <Form.Item name="cliendgroup" label="Cliend group">
      <Select
        mode="tags"
        // style={{ width: "100%" }}
        placeholder="Tags Mode"
        options={options}
      />
    </Form.Item>
  );
};

export default ClientGroup;

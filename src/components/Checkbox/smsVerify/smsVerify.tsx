import { Checkbox, Form } from "antd";

const SmsVerify = () => {
  return (
    <Form.Item
      name="sms"
      style={{ display: "block", margin: "15px auto" }}
      valuePropName="checked"
      initialValue={false}
    >
      <Checkbox>Не отправлять СМС</Checkbox>
    </Form.Item>
  );
};

export default SmsVerify;

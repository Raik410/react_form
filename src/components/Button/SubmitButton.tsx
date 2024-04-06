import { Button, Form } from "antd";

const SubmitButton = () => {
  return (
    <Form.Item name="register" wrapperCol={{ offset: 8 }}>
      <Button block type="primary" htmlType="submit">
        Register
      </Button>
    </Form.Item>
  );
};

export default SubmitButton;

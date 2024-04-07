import { Button, Form } from "antd";

const SubmitButton = () => {
  return (
    <Form.Item name="register">
      <Button block type="primary" htmlType="submit">
        Зарегистрироваться
      </Button>
    </Form.Item>
  );
};

export default SubmitButton;

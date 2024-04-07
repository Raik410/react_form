import styles from "./Form.module.css";
import { Form, Button, message } from "antd";
import FullName from "../Input/FullName/FullName";
import DateBirth from "../Select/DateBirth/DateBirth";
import Gender from "../Select/Gender/Gender";
import ClientGroup from "../Select/ClientGroup/ClientGroup";
import SmsVerify from "../Checkbox/smsVerify/smsVerify.tsx";
import { FormData, ValidateErrorEntity } from "./types";
import PhoneNumber from "../Input/PhoneNumber/PhoneNumber.tsx";
import Doctor from "../Select/Doctor/Doctor.tsx";

const Main = () => {
  const [form] = Form.useForm();

  const onFinish = (values: FormData) => {
    console.log("Success:", values);
    void message.success("Пользователь успешно зарегистрирован");
  };

  const onFinishFailed = (errorInfo: ValidateErrorEntity<FormData>) => {
    console.log("Failed:", errorInfo);
    void message.error("Пожалуйста, проверьте данные формы");
  };

  return (
    <main className={styles.main}>
      <Form
        form={form}
        className={styles.form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
      >
        <FullName />
        <DateBirth />
        <PhoneNumber />
        <ClientGroup />
        <Doctor />
        <Gender />
        <SmsVerify />
        <Form.Item>
          <Button
            className={styles.form__submit}
            type="primary"
            htmlType="submit"
          >
            Зарегистрироваться
          </Button>
        </Form.Item>
      </Form>
    </main>
  );
};

export default Main;

import styles from "./Form.module.css";
import { Form } from "antd";
import FullName from "../Input/FullName/FullName";
import { PhoneNumber } from "../Input/PhoneNumber/PhoneNumber";
import DateBirth from "../Select/DateBirth/DateBirth";
import Gender from "../Select/Gender/Gender";
import ClientGroup from "../Select/ClientGroup/ClientGroup";
import SubmitButton from "../Button/SubmitButton";

const Main = () => {
  const [form] = Form.useForm();

  return (
    <main className={styles.main}>
      <Form form={form} className={styles.form} labelCol={{ span: 8 }}>
        <FullName value="" onChange={() => {}} />
        <DateBirth />
        <PhoneNumber value="" onChange={() => {}} />
        <Gender />
        <ClientGroup />
        <SubmitButton />
      </Form>
    </main>
  );
};

export default Main;

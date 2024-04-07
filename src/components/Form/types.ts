import { NamePath } from "antd/es/form/interface";

export interface ValidateErrorEntity<T> {
  values: T;
  errorFields: {
    name: NamePath;
    errors: string[];
    warnings?: string[];
  }[];
  outOfDate: boolean;
}

export interface FormData {
  fullname: string;
  dateofbirth: string;
  phone: string;
  cliendgroup: string[];
  gender: string;
  sms: boolean;
}

export interface ErrorField {
  name: string[];
  errors: string[];
  warnings: string[];
}

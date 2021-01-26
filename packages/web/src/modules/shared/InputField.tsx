import * as React from 'react';
import {Form, Input} from "antd";
import { FieldProps } from 'formik';

export const InputField: React.FunctionComponent<FieldProps<any> & {prefix: React.ReactDOM}> = ({
  field,
  form: {touched, errors},
  ...props
}) => {
  const errMsg = touched[field.name] && errors[field.name];
  return (
  <Form.Item
    help={errMsg}
    validateStatus={errMsg ? "error" : undefined}
  >
    <Input {...field} {...props} />
  </Form.Item>
)};
import * as React from 'react';
import { Form, Input } from 'antd';
import { FieldProps } from 'formik';

export const InputField: React.FunctionComponent<
  FieldProps<any> & { prefix: React.ReactDOM }
> = ({ field, form: { touched, errors }, ...props }) => {
  const errMsg = touched[field.name] && errors[field.name];
  return (
    <Form.Item help={errMsg} validateStatus={errMsg ? 'error' : undefined}>
      <Input
        {...field}
        {...props}
        style={{
          background: '#F6F7F7',
          boxShadow:
            '8px 8px 12px rgba(0, 0, 0, 0.03) inset,-8px -8px 12px rgba(255, 255, 255, 1) inset',
          border: 0,
          height: 40,
          borderRadius: 10,
        }}
      />
    </Form.Item>
  );
};

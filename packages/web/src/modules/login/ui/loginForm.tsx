import * as React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { FormikErrors, FormikProps, withFormik, Field } from 'formik';
import * as yup from 'yup';
import { InputField } from '../../shared/InputField';

interface FormValues {
  email:string,
  password: string,
}

interface props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>
}

const emailNotLong = "email must be at least 8 characters";
const passwordNotLong = "email must be at least 8 characters";
const invalidEmail = "email must be a valid email"

const LoginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .min(8, emailNotLong)
    .max(255)
    .email(invalidEmail)
    .required(),
  password: yup
    .string()
    .min(8, passwordNotLong)
    .max(255)
    .required(),
});

export const LoginFormFields: React.FunctionComponent<FormikProps<FormValues> & props> = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>

      <Field name="email" placeholder="email" prefix={<UserOutlined className="site-form-item-icon" />} component={InputField} />
      <Field name="password" placeholder="password" type="password" prefix={<LockOutlined className="site-form-item-icon" />} component={InputField} />

      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <a className="login-form-forgot" href="" style={{color:'#10143A'}}>
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" style={{backgroundColor: '#10143A', borderColor: '#10143A'}}>
          Log in
        </Button>
      </Form.Item>
    </form>
  );
};

export const LoginForm = withFormik<props, FormValues>({
  validationSchema: LoginValidationSchema,
  mapPropsToValues: () => ({email: '', password: ''}),
  handleSubmit: async (values, {props, setErrors}) => {
    const errors = await props.submit(values);
    if(errors)
      setErrors(errors);
  },
})(LoginFormFields)
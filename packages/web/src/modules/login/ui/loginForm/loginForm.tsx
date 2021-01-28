import * as React from 'react';
import { Form, Button, Checkbox, Spin } from 'antd';
import { UserOutlined, LockOutlined, LoadingOutlined } from '@ant-design/icons';
import { FormikProps, withFormik, Field } from 'formik';
import { LoginValidationSchema, LoginType } from '@schooly/controller';
import styles from './loginForm.module.css';
import { InputField } from '../../../shared/InputField';

const antIcon = <LoadingOutlined style={{ fontSize: 22, color: 'white' }} spin />;

interface props {
  submit: (values: LoginType) => void;
  errorMsg: boolean
  loading: boolean
}

export const LoginFormFields: React.FunctionComponent<FormikProps<LoginType> & props> = (props) => {

  if(!props.loading && props.errorMsg){
    props.setErrors({email: ' ', password: 'email or password are wrong'});
  }

  return (
    <div className={styles.Container}>
    <Form onFinish={props.handleSubmit}>

      <Field name="email" placeholder="email" prefix={<UserOutlined className="site-form-item-icon" />} component={InputField} />
      <Field name="password" placeholder="password" type="password" prefix={<LockOutlined className="site-form-item-icon" />} component={InputField} />

      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <a className="login-form-forgot" href="/login" >
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" >
          {props.loading ?  <Spin indicator={antIcon} /> : 'Log in'}
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};

export const LoginForm = withFormik<props, LoginType>({
  validationSchema: LoginValidationSchema,
  mapPropsToValues: () => ({email: '', password: ''}),
  handleSubmit: async (values, {props}) => props.submit(values),
})(LoginFormFields)
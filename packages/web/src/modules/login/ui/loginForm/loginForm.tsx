import * as React from 'react';
import { Form, Button, Checkbox, Spin, Radio } from 'antd';
import { UserOutlined, LockOutlined, LoadingOutlined } from '@ant-design/icons';
import { FormikProps, withFormik, Field } from 'formik';
import { LoginValidationSchema, useLoginStore } from '@schooly/controller';
import styles from './loginForm.module.css';
import { InputField } from '../../../shared/InputField';

const antIcon = (
  <LoadingOutlined style={{ fontSize: 22, color: 'white' }} spin />
);

interface Values {
  email: string;
  password: string;
  userType: 'student' | 'staff';
}

interface props {
  submit: (values: Values) => void;
  error: boolean;
  loading: boolean;
}

export const LoginFormFields: React.FunctionComponent<
  FormikProps<Values> & props
> = (props) => {
  const setUserType = useLoginStore((state) => state.setUserType);
  if (props.values.userType) setUserType(props.values.userType);

  if (!props.loading && props.error) {
    props.setErrors({ email: ' ', password: 'email or password are wrong' });
  }

  return (
    <div className={styles.Container}>
      <Form onFinish={props.handleSubmit}>
        <Field
          name="email"
          placeholder="email"
          prefix={<UserOutlined className="site-form-item-icon" />}
          component={InputField}
        />
        <Field
          name="password"
          placeholder="password"
          type="password"
          prefix={<LockOutlined className="site-form-item-icon" />}
          component={InputField}
        />

        <Form.Item style={{ alignSelf: 'center' }}>
          <Radio.Group
            name="userType"
            buttonStyle="solid"
            onChange={props.handleChange}
            defaultValue={props.initialValues.userType}
          >
            <Radio.Button value={'student'} style={{ color: 'black' }}>
              Student
            </Radio.Button>
            <Radio.Button value={'staff'}>Staff</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <a className="login-form-forgot" href="/login">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            {props.loading ? <Spin indicator={antIcon} /> : 'Log in'}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export const LoginForm = withFormik<props, Values>({
  validationSchema: LoginValidationSchema,
  mapPropsToValues: () => ({ email: '', password: '', userType: 'student' }),
  handleSubmit: async (values, { props }) => props.submit(values),
})(LoginFormFields);

import * as React from 'react';
import { LoginForm } from './loginForm';
import { Row, Col } from 'antd';
import logo from '../../../assets/logo.svg';

export const LoginPage = () => {

  const submit = async (values: any) => {
    console.log(values);
    return null;
  }

  return (
    <Row style={{height: '100vh'}}>
      <Col flex={1} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <img src={logo} alt="" style={{width: 'auto', height: 60, margin: 'auto', marginBottom: 30}} />
          <LoginForm submit={submit} />
        </div>
      </Col>
    </Row>
  );
};
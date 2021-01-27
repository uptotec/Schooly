import * as React from 'react';
import { Row, Col } from 'antd';

import styles from './loginPage.module.css';
import { LoginForm } from '../loginForm/loginForm';
import logo from '../../../../assets/logo.svg';

export const LoginPage = () => {

  const submit = async (values: any) => {
    console.log(values);
    return null;
  }

  return (
    <Row className={styles.Container}>
      <Col flex={1} className={styles.LogoFormCol}>
        <div className={styles.LogoForm}>
          <img src={logo} alt="" className={styles.Logo} />
          <LoginForm submit={submit} />
        </div>
      </Col>
    </Row>
  );
};
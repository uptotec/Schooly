import * as React from 'react';
import { Row, Col } from 'antd';
import { LoginControllerData } from '@schooly/controller';
import { Redirect } from 'react-router-dom';

import styles from './loginPage.module.css';
import { LoginForm } from '../loginForm/loginForm';
import logo from '../../../../assets/svu.svg';

export const LoginPage = (props: LoginControllerData) => {
  if (props.success) {
    return <Redirect to="/" />;
  }

  return (
    <Row className={styles.Container}>
      <Col flex={1} className={styles.LogoFormCol}>
        <div className={styles.LogoForm}>
          <img src={logo} alt="logo" className={styles.Logo} />
          <h1 style={{ fontSize: 34, margin: '5px auto' }}>I-Learn</h1>
          <LoginForm {...props} />
        </div>
      </Col>
    </Row>
  );
};

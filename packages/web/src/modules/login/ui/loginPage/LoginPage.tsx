import * as React from 'react';
import { Row, Col } from 'antd';

import styles from './loginPage.module.css';
import { LoginForm } from '../loginForm/loginForm';
import logo from '../../../../assets/logo.svg';

export const LoginPage = (props: any) => {

  return (
    <Row className={styles.Container}>
      <Col flex={1} className={styles.LogoFormCol}>
        <div className={styles.LogoForm}>
          <img src={logo} alt="" className={styles.Logo} />
          <LoginForm submit={props.submit} />
        </div>
      </Col>
    </Row>
  );
};
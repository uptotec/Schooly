import * as React from 'react';
import { Row, Col } from 'antd';
import {LoginControllerData} from '@schooly/controller';
import { Redirect } from 'react-router-dom';

import styles from './loginPage.module.css';
import { LoginForm } from '../loginForm/loginForm';
import logo from '../../../../assets/logo.svg';

export const LoginPage = ({submit, data, loading}: LoginControllerData) => {

  if(data?.studentLogin){
    return <Redirect to='/dashboard' />
  }

  const errMsg = data?.studentLogin === null;

  return (
    <Row className={styles.Container}>
      <Col flex={1} className={styles.LogoFormCol}>
        <div className={styles.LogoForm}>
          <img src={logo} alt="logo" className={styles.Logo} />
          <LoginForm submit={submit} errorMsg={errMsg} loading={loading} />
        </div>
      </Col>
    </Row>
  );
};
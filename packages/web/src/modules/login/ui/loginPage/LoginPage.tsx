import * as React from 'react';
import { Row, Col } from 'antd';
import {LoginControllerData} from '@schooly/controller';
import { Redirect } from 'react-router-dom';

import styles from './loginPage.module.css';
import { LoginForm } from '../loginForm/loginForm';
import logo from '../../../../assets/logo.svg';

export const LoginPage = ({submit, data, loading, error}: LoginControllerData) => {

  if(data?.studentLogin){
    return <Redirect to='/dashboard' />
  }

  console.log('loading: ', loading);
  console.log('data: ', data);
  console.log('error:', error);

  return (
    <Row className={styles.Container}>
      <Col flex={1} className={styles.LogoFormCol}>
        <div className={styles.LogoForm}>
          <img src={logo} alt="" className={styles.Logo} />
          <LoginForm submit={submit} errorMsg={data?.studentLogin === null} loading={loading} />
        </div>
      </Col>
    </Row>
  );
};
import * as React from 'react';
import { Row, Col } from 'antd';
import {LoginControllerData} from '@schooly/controller';
import { Redirect } from 'react-router-dom';

import styles from './loginPage.module.css';
import { LoginForm } from '../loginForm/loginForm';
import logo from '../../../../assets/logo.svg';

export const LoginPage = ({submit, student, staff}: LoginControllerData) => {

  const [userType, setUserType] = React.useState('student');

  let errMsg: boolean = (!!student.data || !!staff.data) && (student.data?.studentLogin === null  || staff.data?.staffLogin === null);
  let loading: boolean = false;

  if(userType === 'student'){
    loading = student.loading;
    if(student.data?.studentLogin){
      return <Redirect to='/dashboard' />
    }
  }else if(userType === 'staff'){
    loading = staff.loading;
    if(staff.data?.staffLogin){
      return <Redirect to='/dashboard' />
    }
  }


  return (
    <Row className={styles.Container}>
      <Col flex={1} className={styles.LogoFormCol}>
        <div className={styles.LogoForm}>
          <img src={logo} alt="logo" className={styles.Logo} />
          <LoginForm submit={submit} errorMsg={errMsg} loading={loading} setUserType={setUserType} />
        </div>
      </Col>
    </Row>
  );
};
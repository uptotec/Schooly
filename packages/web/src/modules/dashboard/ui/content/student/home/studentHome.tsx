import * as React from 'react';
import { Col, Row } from 'antd';

import { DashboardTitle } from '../../common/dashboardTitle/title';
import { SessionsColum } from '../../common/home/sessions/sessionsColum.tsx/SessionsColum';
import logo from '../../../../../../assets/logo-colors.svg';

import styles from './studentHome.module.css';

export const StudentHome = () => {
  return (
    <>
      <Row className={styles.ShowLogo} align="middle" justify="center">
        <img src={logo} alt="logo" className={styles.Logo} />
      </Row>
      <Row justify="space-between">
        <Col>
          <DashboardTitle />
        </Col>
      </Row>
      <Row>
        <Col flex={1} className={`ShadowBox ${styles.SessionsColum}`}>
          <SessionsColum />
        </Col>
      </Row>
    </>
  );
};

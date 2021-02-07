import * as React from 'react';
import { Col, Row } from 'antd';

import { DashboardTitle } from '../../common/dashboardTitle/title';
import { SessionsColum } from '../../common/home/sessions/sessionsColum.tsx/SessionsColum';

import styles from './studentHome.module.css';

export const StudentHome = () => {
  return (
    <>
      <Row>
        <DashboardTitle />
      </Row>
      <Row>
        <Col flex={1} className={`ShadowBox ${styles.SessionsColum}`}>
          <SessionsColum />
        </Col>
        <Col flex={12}></Col>
      </Row>
    </>
  );
};

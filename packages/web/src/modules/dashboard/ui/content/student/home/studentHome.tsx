import * as React from 'react';
import { Col, Row, Typography } from 'antd';
import moment from 'moment';

import { DashboardTitle } from '../../common/dashboardTitle/title';
import { SessionsColum } from '../../common/home/sessions/sessionsColum.tsx/SessionsColum';
import logo from '../../../../../../assets/logo-colors.svg';

import styles from './studentHome.module.css';

export const StudentHome = () => {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Row className={styles.ShowLogo} align="middle" justify="center">
        <img src={logo} alt="logo" className={styles.Logo} />
      </Row>
      <Row justify="space-between">
        <Col>
          <DashboardTitle />
        </Col>
        <Col
          className={`ShadowBox`}
          style={{
            padding: '10px 5px',
            alignItems: 'center',
            display: 'flex',
            borderRadius: 10,
            marginRight: 50,
          }}
        >
          <Typography.Title level={3} style={{ margin: 0, padding: 0 }}>
            {moment(time).format('hh:mm A')}
          </Typography.Title>
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

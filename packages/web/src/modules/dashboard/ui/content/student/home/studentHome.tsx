import * as React from 'react';
import { Col, Row } from 'antd';

import { DashboardTitle } from '../../common/dashboardTitle/title';
import { SessionsColum } from './components/sessions/sessions';

export const StudentHome = () => {
  return (
    <>
      <Row>
        <DashboardTitle />
      </Row>
      <Row>
        <Col flex={7}></Col>
        <Col
          flex={1}
          style={{
            background: '#F6F7F7',
            padding: 20,
            boxShadow:
              '8px 8px 12px rgba(0, 0, 0, 0.07),-10px -10px 12px rgba(255, 255, 255, 1)',
            borderRadius: 10,
          }}
        >
          <SessionsColum />
        </Col>
      </Row>
    </>
  );
};

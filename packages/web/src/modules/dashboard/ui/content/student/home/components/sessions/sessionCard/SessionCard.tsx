import * as React from 'react';
import { Col, Row, Typography } from 'antd';
import { Timetable } from '@schooly/controller';
import { formatAMPM } from '../utils';

const { Title, Text } = Typography;

export const SessionCard = ({
  type,
  course,
  duration_mins,
  start_time,
}: Timetable) => {
  return (
    <div
      style={{
        background: '#F6F7F7',
        width: '90%',
        margin: 'auto',
        borderRadius: 10,
        boxShadow:
          '8px 8px 12px rgba(0, 0, 0, 0.03) inset,-8px -8px 12px rgba(255, 255, 255, 1) inset',
        marginBottom: 20,
      }}
    >
      <Row gutter={20} align="middle">
        <Col
          style={{
            borderRadius: '50%',
            padding: 8,
            boxShadow:
              '8px 8px 12px rgba(0, 0, 0, 0.03),-8px -8px 12px rgba(255, 255, 255, 1)',
            margin: '15px 0px 15px 30px',
          }}
        >
          <div
            style={{
              width: 50,
              height: 50,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Title level={4} style={{ margin: 0, fontSize: 18 }}>
              {duration_mins >= 60 ? duration_mins / 60 : duration_mins}
            </Title>
            <Title level={5} style={{ margin: 0, fontSize: 12 }}>
              {duration_mins >= 60 ? 'Hours' : 'Minutes'}
            </Title>
          </div>
        </Col>
        <Col>
          <Title level={5} style={{ margin: 0 }}>
            {`${course.name} ${type}`}
          </Title>
          <Text style={{ color: '#7C7C7C', fontSize: 14 }}>
            Starts at {formatAMPM(start_time)}
          </Text>
        </Col>
      </Row>
    </div>
  );
};

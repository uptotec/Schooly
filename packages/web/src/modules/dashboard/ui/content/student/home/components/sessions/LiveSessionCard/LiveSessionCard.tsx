import * as React from 'react';
import { Button, Col, Progress, Row, Typography } from 'antd';
import { Timetable } from '@schooly/controller';
import { formatAMPM, openInNewTab } from '../utils';

const { Title, Text } = Typography;

export const LiveSessionCard = ({
  course,
  type,
  duration_mins,
  start_time,
  joinLink,
  startDate,
  nowDate,
}: Timetable & { startDate: Date; nowDate: Date }) => {
  const diffMs = nowDate.getTime() - startDate.getTime();
  const diffMins = Math.round(diffMs / 1000 / 60);
  return (
    <div
      style={{
        background: '#F6F7F7',
        width: '90%',
        margin: 'auto',
        borderRadius: 10,
        boxShadow:
          '8px 8px 12px rgba(0, 0, 0, 0.03) inset,-8px -8px 12px rgba(255, 255, 255, 0.8) inset',
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
          <Progress
            type="circle"
            percent={(diffMins / duration_mins) * 100}
            width={55}
            showInfo={false}
            strokeWidth={18}
            trailColor="#E3E8F1"
          />
        </Col>
        <Col>
          <Title level={5} style={{ margin: 0 }}>
            {`${course.name} ${type}`}
          </Title>
          <Text style={{ color: '#7C7C7C', fontSize: 14 }}>
            LIVE NOW! - Ends at {formatAMPM(start_time, duration_mins)}
          </Text>
        </Col>
      </Row>
      <Row justify="center" align="middle">
        <Button
          style={{
            borderRadius: 10,
            //background: 'linear-gradient(145deg, #f0f0f0, #cacaca)',
            background: '#3F90FF',
            boxShadow:
              '8px 8px 12px rgba(0, 0, 0, 0.03),-8px -8px 12px rgba(255, 255, 255, 1)',
            height: 35,
            width: '100%',
          }}
          onClick={() => openInNewTab(joinLink!)}
        >
          <Title level={5} style={{ margin: 0, color: 'white' }}>
            Join Now
          </Title>
        </Button>
      </Row>
    </div>
  );
};

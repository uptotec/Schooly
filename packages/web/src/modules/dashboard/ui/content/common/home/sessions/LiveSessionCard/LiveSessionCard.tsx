import * as React from 'react';
import { Button, Col, Progress, Row, Typography } from 'antd';
import { Timetable } from '@schooly/controller';

import { formatAMPM, openInNewTab } from '../utils';

import styles from './LiveSessionCard.module.css';

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
    <div className={`InsetShadowBox ${styles.SessionCard}`}>
      <Row gutter={20} align="middle">
        <Col className={`ShadowBox ${styles.SessionCardCircle}`}>
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
          className="ShadowBox"
          style={{
            borderRadius: 10,
            background: '#3F90FF',
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

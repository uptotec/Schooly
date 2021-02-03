import * as React from 'react';
import { Col, Row, Typography } from 'antd';
import { Timetable } from '@schooly/controller';

import { formatAMPM } from '../utils';

import styles from './sessionsCard.module.css';

const { Title, Text } = Typography;

export const SessionCard = ({
  type,
  course,
  duration_mins,
  start_time,
}: Timetable) => {
  return (
    <div className={`InsetShadowBox ${styles.SessionCard}`}>
      <Row gutter={20} align="middle">
        <Col className={`ShadowBox ${styles.SessionCardCircle}`}>
          <div className={styles.CircleText}>
            <Title level={4} style={{ margin: 0, fontSize: 18 }}>
              {duration_mins >= 60 ? duration_mins / 60 : duration_mins}
            </Title>
            <Title level={5} style={{ margin: 0, fontSize: 14 }}>
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

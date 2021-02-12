import * as React from 'react';
import { Col, Row, Typography } from 'antd';
import { Timetable } from '@schooly/controller';
import { FaRegBuilding } from 'react-icons/fa';
import { CgMediaLive } from 'react-icons/cg';

import { formatAMPM } from '../utils';

import styles from './sessionsCard.module.css';

const { Title, Text } = Typography;

export const SessionCard = ({
  type,
  course,
  duration_mins,
  start_time,
  online,
}: Timetable) => {
  return (
    <div className={`InsetShadowBox ${styles.SessionCard}`}>
      <Row align="middle" justify="space-between">
        <Col>
          <Row align="middle" gutter={20}>
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
              <Title level={5} style={{ margin: 0 }} className={styles.Title}>
                {`${course.name} ${type}`}
              </Title>
              <Text style={{ color: '#7C7C7C', fontSize: 14 }}>
                Starts at {formatAMPM(start_time)}
              </Text>
              <Text className={styles.LocationText}>online session</Text>
            </Col>
          </Row>
        </Col>
        <Col>
          {!online ? (
            <div className={styles.OnCampus_Online}>
              <FaRegBuilding
                color="#7c7c7c"
                size={24}
                className={styles.LocationIcon}
              />
              <Text
                style={{ color: '#7c7c7c' }}
                className={styles.LocationIcon}
              >
                on campus
              </Text>
            </div>
          ) : (
            <div className={styles.OnCampus_Online}>
              <CgMediaLive
                color="#7c7c7c"
                size={26}
                className={styles.LocationIcon}
              />
              <Text
                style={{ color: '#7c7c7c' }}
                className={styles.LocationIcon}
              >
                online session
              </Text>
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
};

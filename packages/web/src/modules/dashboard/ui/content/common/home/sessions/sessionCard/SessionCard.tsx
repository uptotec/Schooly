import * as React from 'react';
import { Col, Row, Typography } from 'antd';
import { Timetable, useUserStore } from '@schooly/controller';
import { FaRegBuilding } from 'react-icons/fa';
import { CgMediaLive } from 'react-icons/cg';

import { formatAMPM } from '../utils';

import styles from './sessionsCard.module.css';
import { userTypes } from '@schooly/common';

const { Title, Text } = Typography;

export const SessionCard = ({
  type,
  course,
  duration_mins,
  start_time,
  online,
  groupType,
  group,
  class: classVar,
}: Timetable) => {
  const userType = useUserStore((state) => state.userType);

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
                {/* {`${course.name} ${type}`} */}
                {`${course.name}`}
              </Title>
              <Text
                style={{ color: '#7C7C7C', fontSize: 14, display: 'block' }}
              >
                {userType === userTypes.staff && groupType === 'group'
                  ? `${
                      group!.class.department || group!.class.facility.name
                    } | ${group!.name}`
                  : userType === userTypes.staff && groupType === 'class'
                  ? `${classVar!.department || classVar!.facility.name} DY ${
                      classVar?.degree_year
                    }`
                  : null}
              </Text>
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
      {/* {userType === userTypes.staff ? (
        <Row justify="center" align="middle">
          <Button
            className="ShadowBox"
            danger
            style={{
              borderRadius: 10,
              background: '#EE5A5A',
              height: 35,
              width: '100%',
            }}
          >
            <Title level={5} style={{ margin: 0, color: 'white' }}>
              Delete Session
            </Title>
          </Button>
        </Row>
      ) : null} */}
    </div>
  );
};

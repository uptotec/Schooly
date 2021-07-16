import * as React from 'react';
import { Button, Col, Progress, Row, Typography } from 'antd';
import { Timetable, useUserStore } from '@schooly/controller';
import { userTypes } from '@schooly/common';

import { formatAMPM, openInNewTab } from '../utils';

import styles from './LiveSessionCard.module.css';
import { FaRegBuilding } from 'react-icons/fa';
import { CgMediaLive } from 'react-icons/cg';

const { Title, Text } = Typography;

export const LiveSessionCard = ({
  course,
  type,
  duration_mins,
  start_time,
  joinLink,
  startDate,
  nowDate,
  online,
  groupType,
  group,
  class: classVar,
}: Timetable & { startDate: Date; nowDate: Date }) => {
  const diffMs = nowDate.getTime() - startDate.getTime();
  const diffMins = Math.round(diffMs / 1000 / 60);

  const userType = useUserStore((state) => state.userType);

  return (
    <div className={`InsetShadowBox ${styles.SessionCard}`}>
      <Row justify="space-between" align="middle">
        <Col>
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
              <Text
                style={{ color: '#7C7C7C', fontSize: 14 }}
                className={styles.LiveNow}
              >
                {`LIVE NOW! - `}
              </Text>
              <Text style={{ color: '#7C7C7C', fontSize: 14 }}>
                Ends at {formatAMPM(start_time, duration_mins)}
              </Text>
              <Text className={styles.LocationText}>online session</Text>
            </Col>
          </Row>
        </Col>
        <Col>
          {!online ? (
            <div className={`${styles.OnCampus_Online} ${styles.LocationIcon}`}>
              <FaRegBuilding color="#7c7c7c" size={24} />
              <Text style={{ color: '#7c7c7c' }}>on campus</Text>
            </div>
          ) : (
            <div className={`${styles.OnCampus_Online} ${styles.LocationIcon}`}>
              <CgMediaLive color="#7c7c7c" size={26} />
              <Text style={{ color: '#7c7c7c' }}>online session</Text>
            </div>
          )}
        </Col>
      </Row>
      {joinLink && online ? (
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
      ) : null}
    </div>
  );
};

import * as React from 'react';
import { Row, Typography } from 'antd';
import { useStudentStore } from '@schooly/controller';
import { formatAMPM, startEndDates } from './utils';
import { LiveSessionCard } from './LiveSessionCard/LiveSessionCard';
import { SessionCard } from './sessionCard/SessionCard';

const { Title, Text } = Typography;

export const SessionsColum = () => {
  const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  const [nowDate, setNowDate] = React.useState(new Date());
  const nowDay = new Date().getDay();
  const timeTable = useStudentStore((state) => state.meStudent?.timetable);
  const todayTimeTable = timeTable?.filter(
    (session) => days[nowDay] === session.day
  );

  setInterval(() => setNowDate(new Date()), 60000);

  return (
    <>
      <Row>
        <Title
          level={3}
          style={{
            fontWeight: 500,
            marginBottom: 20,
          }}
        >
          Sessions
        </Title>
      </Row>
      {todayTimeTable?.map((session) => {
        const { startDate, endDate } = startEndDates(
          session.start_time,
          session.duration_mins
        );
        if (nowDate >= startDate && nowDate < endDate) {
          return (
            <Row key={`${session.timetableId}`}>
              <LiveSessionCard
                {...session}
                startDate={startDate}
                nowDate={nowDate}
              />
            </Row>
          );
        }
        return (
          <Row key={`${session.timetableId}`}>
            <SessionCard {...session} />
          </Row>
        );
      })}
      <Row align="middle" justify="center">
        <Text>
          Your day ends at{' '}
          {formatAMPM(
            todayTimeTable![todayTimeTable!.length - 1].start_time,
            todayTimeTable![todayTimeTable!.length - 1].duration_mins
          )}{' '}
          🙌
        </Text>
      </Row>
    </>
  );
};

import * as React from 'react';
import { Row, Typography } from 'antd';
import { Timetable } from '@schooly/controller';
import { startEndDates, formatAMPM } from '../utils';
import { LiveSessionCard } from '../LiveSessionCard/LiveSessionCard';
import { SessionCard } from '../sessionCard/SessionCard';

const { Text } = Typography;

export const SessionsList = ({
  timeTable,
  nowDate,
  isTomorrow,
  lastSession,
}: {
  timeTable: Timetable[];
  nowDate: Date;
  isTomorrow: boolean;
  lastSession: Timetable;
}) => {
  return (
    <>
      {timeTable?.map((session) => {
        const { startDate, endDate } = startEndDates(
          session.start_time,
          session.duration_mins
        );

        if (nowDate >= startDate && nowDate < endDate && !isTomorrow) {
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
          {formatAMPM(lastSession.start_time, lastSession.duration_mins)} 🙌
        </Text>
      </Row>
    </>
  );
};

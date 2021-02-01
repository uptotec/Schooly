import * as React from 'react';
import { Row } from 'antd';
import { Timetable } from '@schooly/controller';
import { startEndDates } from '../utils';
import { LiveSessionCard } from '../LiveSessionCard/LiveSessionCard';
import { SessionCard } from '../sessionCard/SessionCard';

export const SessionsList = ({
  timeTable,
  nowDate,
  isTomorrow,
}: {
  timeTable: Timetable[];
  nowDate: Date;
  isTomorrow: boolean;
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
    </>
  );
};

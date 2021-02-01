import * as React from 'react';
import { Empty, Row, Typography } from 'antd';
import { Timetable, useStudentStore } from '@schooly/controller';
import { formatAMPM, getSelectedTimetable } from './utils';

import noSessions from '../../../../../../../../assets/noSessions.svg';
import { SessionsList } from './sessionsList/sessionsList';

const { Title, Text } = Typography;

const YourDayEnds = ({ lastSession }: { lastSession: Timetable }) => {
  return (
    <Row align="middle" justify="center">
      <Text>
        Your day ends at{' '}
        {formatAMPM(lastSession.start_time, lastSession.duration_mins)} 🙌
      </Text>
    </Row>
  );
};

export const SessionsColum = () => {
  const [nowDate, setNowDate] = React.useState(new Date());

  const timeTable = useStudentStore((state) => state.meStudent?.timetable);

  const {
    day,
    selectedTimetable,
    lastSession,
    isSessions,
  } = getSelectedTimetable({
    timeTable,
    nowDate,
  });

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
          {`${day.charAt(0).toUpperCase() + day.slice(1)}'s Sessions`}
        </Title>
      </Row>
      {isSessions ? (
        <>
          <SessionsList
            timeTable={selectedTimetable!}
            nowDate={nowDate}
            isTomorrow={day === 'tomorrow'}
          />
          <YourDayEnds lastSession={lastSession!} />
        </>
      ) : (
        <Empty
          description={`There is no sessions for ${day}`}
          image={noSessions}
        />
      )}
    </>
  );
};

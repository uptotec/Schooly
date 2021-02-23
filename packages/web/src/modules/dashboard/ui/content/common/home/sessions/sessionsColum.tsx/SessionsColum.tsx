import * as React from 'react';
import { Empty, Row, Typography } from 'antd';
import {
  useStaffStore,
  useStudentStore,
  useUserStore,
} from '@schooly/controller';

import { getSelectedTimetable } from '../utils';
import noSessions from '../../../../../../../../assets/noSessions.svg';
import { SessionsList } from '../sessionsList/sessionsList';

import styles from './sessionsColum.module.css';
import { userTypes } from '@schooly/common';

const { Title } = Typography;

export const SessionsColum = () => {
  const [nowDate, setNowDate] = React.useState(new Date());

  const userType = useUserStore((state) => state.userType);
  const StudentTimeTable = useStudentStore(
    (state) => state.meStudent?.timetable
  );
  const StaffTimeTable = useStaffStore((state) => state.meStaff?.timetable);

  let timeTable;

  if (userType === userTypes.staff) {
    timeTable = StaffTimeTable;
  } else {
    timeTable = StudentTimeTable;
  }

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
        <Title level={3} className={styles.ColumTitle}>
          {`${day.charAt(0).toUpperCase() + day.slice(1)}'s Sessions`}
        </Title>
      </Row>
      {isSessions ? (
        <SessionsList
          timeTable={selectedTimetable!}
          nowDate={nowDate}
          isTomorrow={day === 'tomorrow'}
          lastSession={lastSession!}
        />
      ) : (
        <Empty
          image={noSessions}
          description={`There is no sessions for ${day}`}
        />
      )}
    </>
  );
};

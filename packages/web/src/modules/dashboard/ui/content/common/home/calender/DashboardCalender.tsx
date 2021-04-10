import * as React from 'react';
import { Typography, Col, Row, Calendar, Empty, Modal, Button } from 'antd';
import {
  useStaffStore,
  useStudentStore,
  useUserStore,
} from '@schooly/controller';
import moment from 'moment';
import { userTypes } from '@schooly/common';

import { SessionsList } from '../sessions/sessionsList/sessionsList';
import noSessions from '../../../../../../../assets/noSessions.svg';
import { NewSessionFormConnector } from '../../../../../dashboardConnector';

const { Title } = Typography;

export const DashboardCalender = () => {
  const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  const [date, setDate] = React.useState(moment);
  const [newSession, setNewSession] = React.useState(false);

  const userType = useUserStore((state) => state.userType);
  const studentTimetable = useStudentStore(
    (state) => state.meStudent?.timetable
  );
  const staffTimetable = useStaffStore((state) => state.meStaff?.timetable);

  const Timetable =
    userType === userTypes.staff ? staffTimetable : studentTimetable;

  const selectedTimetable = Timetable?.filter(
    (session) =>
      (session.recurring && days[date.day()] === session.day) ||
      (!session.recurring && date.isSame(moment(session.date), 'day'))
  );

  return (
    <>
      <Modal
        visible={newSession}
        title="Add new session"
        onCancel={() => setNewSession(false)}
        footer={[
          <Button form="createSessionForm" key="submit" htmlType="submit">
            Submit
          </Button>,
        ]}
      >
        <NewSessionFormConnector />
      </Modal>
      <Row style={{ marginBottom: 20, width: '100%' }} justify="space-between">
        <Col>
          <Title level={2}>Calender</Title>
        </Col>
        {userType === userTypes.staff ? (
          <Col>
            <Button
              className="ShadowBox"
              style={{
                borderRadius: 10,
                background: '#3F90FF',
                height: 35,
                width: 200,
                marginRight: 50,
              }}
              onClick={() => setNewSession(true)}
            >
              <Title level={5} style={{ margin: 0, color: 'white' }}>
                create new session
              </Title>
            </Button>
          </Col>
        ) : (
          () => null
        )}
      </Row>
      <Row gutter={[25, 25]}>
        <Col flex="450px">
          <div
            className="ShadowBox"
            style={{ width: 450, borderRadius: 10, padding: 20 }}
          >
            <Title level={3}>Select a Date</Title>
            <Calendar
              fullscreen={false}
              value={date}
              onSelect={(newDate) => setDate(newDate)}
            />
          </div>
        </Col>

        <Col flex="auto">
          <div
            className="ShadowBox"
            style={{
              padding: 20,
              borderRadius: 10,
              maxWidth: 550,
              minWidth: 450,
            }}
          >
            <Title level={3}>Sessions</Title>
            {selectedTimetable?.length ? (
              <SessionsList
                timeTable={selectedTimetable}
                nowDate={new Date()}
                isTomorrow={!date.isSame(new Date(), 'day')}
                lastSession={selectedTimetable[selectedTimetable.length - 1]}
              />
            ) : (
              <Empty image={noSessions} description={'There is no sessions'} />
            )}
          </div>
        </Col>
      </Row>
    </>
  );
};

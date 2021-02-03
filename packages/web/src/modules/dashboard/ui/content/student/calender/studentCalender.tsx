import * as React from 'react';
import { Typography, Col, Row, Calendar, Empty } from 'antd';
import { useStudentStore } from '@schooly/controller';
import moment from 'moment';
import { SessionsList } from '../../common/home/sessions/sessionsList/sessionsList';
import noSessions from '../../../../../../assets/noSessions.svg';

const { Title } = Typography;

export const StudentCalender = () => {
  const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  const [date, setDate] = React.useState(moment);
  const Timetable = useStudentStore((state) => state.meStudent?.timetable);

  const selectedTimetable = Timetable?.filter(
    (session) =>
      (session.recurring && days[date.day()] === session.day) ||
      (!session.recurring && date.isSame(moment(session.date), 'day'))
  );

  return (
    <>
      <Row style={{ marginBottom: 20 }}>
        <Col>
          <Title level={2}>Calender</Title>
        </Col>
      </Row>
      <Row gutter={50}>
        <Col>
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

        <Col span={8}>
          <div className="ShadowBox" style={{ padding: 20, borderRadius: 10 }}>
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

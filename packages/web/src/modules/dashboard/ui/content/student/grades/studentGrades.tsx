import { StudentGradesControllerData } from '@schooly/controller';
import { Col, Row, Table, Typography } from 'antd';
import Column from 'antd/lib/table/Column';
import { LoadingSpinner } from '../../../../../shared/loadingSpinner';

const { Title } = Typography;

export const StudentGrades = ({
  data,
  loading,
}: StudentGradesControllerData) => {
  if (loading) {
    return <LoadingSpinner message="Grades Loading" />;
  }

  return (
    <>
      <Row>
        <Col>
          <Title level={2}>Grades</Title>
        </Col>
      </Row>
      <Row>
        <Col>
          {/* <Title level={3}>All grades</Title> */}
          <Table dataSource={data!.meStudent.grades}>
            <Column title="Exam" dataIndex={['exam', 'name']} key="name" />
            <Column
              title="Course"
              dataIndex={['exam', 'enrollment', 'course', 'name']}
              key="course"
            />
          </Table>
        </Col>
      </Row>
    </>
  );
};

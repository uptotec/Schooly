import { StudentGradesController } from '@schooly/controller';
import { StudentGrades } from './studentGrades';

export const StudentGradesConnector = () => {
  return (
    <StudentGradesController>
      {(data) => <StudentGrades {...data} />}
    </StudentGradesController>
  );
};

import { LogoutController, StudentController } from '@schooly/controller';
import { Dashboard } from './ui/dashboard';
import { StudentDashboard } from './ui/studentDashboard/studentDashboard';

export const DashboardConnector = () => {
  return (
    <LogoutController>{(data) => <Dashboard {...data} />}</LogoutController>
  );
};

export const StudentDashboardConnector = () => {
  return (
    <StudentController>
      {(data) => <StudentDashboard {...data} />}
    </StudentController>
  );
};

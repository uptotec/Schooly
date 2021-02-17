import {
  LogoutController,
  StudentController,
  StaffController,
} from '@schooly/controller';
import { Dashboard } from './ui/dashboard';
import { StudentDashboard } from './ui/studentDashboard/studentDashboard';
import { StaffDashboard } from './ui/staffDashboard/staffDashboard';

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

export const StaffDashboardConnector = () => {
  return (
    <StaffController>{(data) => <StaffDashboard {...data} />}</StaffController>
  );
};

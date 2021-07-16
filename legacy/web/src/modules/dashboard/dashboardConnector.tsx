import {
  LogoutController,
  StudentController,
  StaffController,
  NewSessionController,
} from '@schooly/controller';
import { Dashboard } from './ui/dashboard';
import { StudentDashboard } from './ui/studentDashboard/studentDashboard';
import { StaffDashboard } from './ui/staffDashboard/staffDashboard';
import { NewSessionForm } from './ui/forms/newSessionForm';

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

export const NewSessionFormConnector = () => {
  return (
    <NewSessionController>
      {(data) => <NewSessionForm {...data} />}
    </NewSessionController>
  );
};

import { Redirect } from 'react-router-dom';
import { LogoutControllerData, useUserStore } from '@schooly/controller';
import { useIdleTimer } from 'react-idle-timer';
import {
  StudentDashboardConnector,
  StaffDashboardConnector,
} from '../dashboardConnector';

export const Dashboard = ({
  loading,
  logout,
  called,
}: LogoutControllerData) => {
  const userType = useUserStore((state) => state.userType);

  const handleOnIdle = () => {
    console.log('idle');
    if (!called) {
      logout();
    }
  };

  useIdleTimer({
    timeout: 1000 * 60 * 30,
    onIdle: handleOnIdle,
    stopOnIdle: true,
  });

  if (!loading && called) {
    return <Redirect to="/login" />;
  } else if (userType === 'student') {
    return <StudentDashboardConnector />;
  } else {
    return <StaffDashboardConnector />;
  }
};

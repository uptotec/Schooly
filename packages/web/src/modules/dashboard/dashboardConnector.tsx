import { LogoutController } from '@schooly/controller';
import { Dashboard } from './ui/dashboard';

export const DashboardConnector = () => {
  return (
    <LogoutController>{(data) => <Dashboard {...data} />}</LogoutController>
  );
};

import { Switch, Route } from 'react-router-dom';
import { Typography } from 'antd';
import { StaffHome } from '../modules/dashboard/ui/content/staff/home/staffHome';
const { Title } = Typography;

export const StaffDashboardRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={StaffHome} />
      <Route exact path="/calendar" component={() => <Title>Calender</Title>} />
    </Switch>
  );
};

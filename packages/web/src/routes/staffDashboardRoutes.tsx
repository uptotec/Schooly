import { Switch, Route } from 'react-router-dom';
import { StaffHome } from '../modules/dashboard/ui/content/staff/home/staffHome';
import { DashboardCalender } from '../modules/dashboard/ui/content/common/home/calender/DashboardCalender';

export const StaffDashboardRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={StaffHome} />
      <Route exact path="/calendar" component={DashboardCalender} />
    </Switch>
  );
};

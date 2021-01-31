import { Switch, Route } from 'react-router-dom';
import { StudentHome } from '../modules/dashboard/ui/content/student/studentHome';

export const StudentDashboardRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={StudentHome} />
    </Switch>
  );
};

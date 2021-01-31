import { Switch, Route } from 'react-router-dom';
import { StudentHome } from '../modules/dashboard/ui/content/student/studentHome';

export const StudentDashboardRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={StudentHome} />
      <Route exact path="/courses" component={() => <div>Courses</div>} />
      <Route exact path="/calendar" component={() => <div>Calendar</div>} />
      <Route exact path="/tasks" component={() => <div>Tasks</div>} />
      <Route exact path="/sessions" component={() => <div>Sessions</div>} />
      <Route exact path="/grades" component={() => <div>Grades</div>} />
    </Switch>
  );
};

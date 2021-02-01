import { Switch, Route } from 'react-router-dom';
import { StudentHome } from '../modules/dashboard/ui/content/student/home/studentHome';
import { Typography } from 'antd';
const { Title } = Typography;

export const StudentDashboardRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={StudentHome} />
      <Route
        exact
        path="/courses"
        component={() => <Title level={2}>Courses</Title>}
      />
      <Route
        exact
        path="/calendar"
        component={() => <Title level={2}>Calendar</Title>}
      />
      <Route
        exact
        path="/tasks"
        component={() => <Title level={2}>Tasks</Title>}
      />
      <Route
        exact
        path="/sessions"
        component={() => <Title level={2}>Sessions</Title>}
      />
      <Route
        exact
        path="/grades"
        component={() => <Title level={2}>Grades</Title>}
      />
    </Switch>
  );
};

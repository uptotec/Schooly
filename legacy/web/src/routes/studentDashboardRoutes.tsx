import { Switch, Route } from 'react-router-dom';
import { StudentHome } from '../modules/dashboard/ui/content/student/home/studentHome';
import { Typography } from 'antd';
import { DashboardCalender } from '../modules/dashboard/ui/content/common/home/calender/DashboardCalender';
import { StudentGradesConnector } from '../modules/dashboard/ui/content/student/grades/studentGradesConnector';
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
      <Route exact path="/calendar" component={DashboardCalender} />
      <Route
        exact
        path="/tasks"
        component={() => <Title level={2}>Tasks</Title>}
      />
      <Route exact path="/grades" component={StudentGradesConnector} />
    </Switch>
  );
};

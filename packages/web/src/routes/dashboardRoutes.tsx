import { Switch, Route } from 'react-router-dom';

export const DashboardRouter = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <div>home</div>} />
    </Switch>
  );
};

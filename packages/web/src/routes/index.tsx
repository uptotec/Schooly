import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LoginConnector } from '../modules/login/LoginConnector';

import { AuthRoute } from './authRoute';
import { DashboardConnector } from '../modules/dashboard/dashboardConnector';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <AuthRoute exact path="/" component={DashboardConnector} />
        <Route exact path="/login" component={LoginConnector} />
      </Switch>
    </BrowserRouter>
  );
};

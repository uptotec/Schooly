import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LoginConnector } from '../modules/login/LoginConnector';

import { AuthRoute } from './authRoute';
import { DashboardConnector } from '../modules/dashboard/dashboardConnector';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={LoginConnector} />
        <AuthRoute path="/" component={DashboardConnector} />
      </Switch>
    </BrowserRouter>
  );
};

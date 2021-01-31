import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { AuthRoute } from './authRoute';
const LoginConnector = React.lazy(() =>
  import('../modules/login/LoginConnector').then(({ LoginConnector }) => ({
    default: LoginConnector,
  }))
);

const DashboardConnector = React.lazy(() =>
  import('../modules/dashboard/dashboardConnector').then(
    ({ DashboardConnector }) => ({
      default: DashboardConnector,
    })
  )
);

export const Routes = () => {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/login" component={LoginConnector} />
          <AuthRoute path="/" component={DashboardConnector} />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
};

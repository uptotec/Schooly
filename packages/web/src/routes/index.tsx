import { BrowserRouter, Route, Switch } from "react-router-dom";
import { LoginConnector } from '../modules/login/LoginConnector';
import { AuthRoute } from './authRoute';

export const Routes = () => {
  return (
    <BrowserRouter>
    <Switch>
      <AuthRoute exact path="/dashboard" component={() => <div>dashboard</div>} />
      <Route exact path="/login" component={LoginConnector} />
    </Switch>
    </BrowserRouter>
  )
};
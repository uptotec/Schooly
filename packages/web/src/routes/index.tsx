import { BrowserRouter, Route, Switch } from "react-router-dom";
import { LoginConnector } from '../modules/login/LoginConnector';

export const Routes = () => (
  <BrowserRouter>
  <Switch>
    <Route exact path="/login" component={LoginConnector} />
  </Switch>
  </BrowserRouter>
);
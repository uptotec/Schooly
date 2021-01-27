import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { LoginConnector } from '../modules/login/LoginConnector';


export const Routes = () => (
  <BrowserRouter>
  <Switch>
    <Route exact path="/">{<Redirect to="/login" />}</Route>
    <Route exact path="/dashboard" component={() => <div>dashboard</div>} />
    <Route exact path="/login" component={LoginConnector} />
  </Switch>
  </BrowserRouter>
);
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { LoginConnector } from '../modules/login/LoginConnector';
import { useUserStore } from '@schooly/controller';

export const Routes = () => {
  const loggedIn = useUserStore(state => state.loggedIn);
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/">{loggedIn ?  <Redirect to="/dashboard" /> : <Redirect to="/login" />}</Route>
      <Route exact path="/dashboard" component={() => <div>dashboard</div>} />
      <Route exact path="/login" component={LoginConnector} />
    </Switch>
    </BrowserRouter>
  )
};
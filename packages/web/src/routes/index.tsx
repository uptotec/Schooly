import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { LoginConnector } from '../modules/login/LoginConnector';
import { useUserStore } from '@schooly/controller'

import { AuthRoute } from './authRoute';

const RootURL = () => {
  const userType = useUserStore(state => state.userType);
  if(userType === 'student'){
    return <Redirect to="/student" />;
  }

  if(userType === 'staff'){
    return <Redirect to="/staff" />;
  }

  return <Redirect to="/login" />;
};

export const Routes = () => {
  return (
    <BrowserRouter>
    <Switch>
      <AuthRoute exact path="/"  component={RootURL} />
      <AuthRoute exact path="/student" roles={['student']}  component={() => <div>student dashboard</div>} />
      <AuthRoute exact path="/staff" roles={['staff']}  component={() => <div>staff dashboard</div>} />
      <Route exact path="/login" component={LoginConnector} />
    </Switch>
    </BrowserRouter>
  )
};
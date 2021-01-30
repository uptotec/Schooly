import { LoginController, useUserStore } from '@schooly/controller';
import { Redirect } from 'react-router-dom';

import { LoginPage } from './ui/loginPage/LoginPage';

export  const X = () => (
  <LoginController>
    {(data) => <LoginPage {...data} />}
  </LoginController>
);

export const LoginConnector: React.FunctionComponent = () => {
  const isLoggedIn = useUserStore(state =>state.loggedIn);
  console.log('here in login: ', isLoggedIn);
  if(isLoggedIn){
    return <Redirect to='/' />
  }
  return <X />
};
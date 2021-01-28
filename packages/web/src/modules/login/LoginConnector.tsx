import {LoginController, MeController} from '@schooly/controller';
import { Redirect } from 'react-router-dom';

import { LoginPage } from './ui/loginPage/LoginPage';

export  const X = () => (
  <LoginController>
    {(data) => <LoginPage {...data} />}
  </LoginController>
);

export const LoginConnector = () => (
  <MeController>
    {({loading, error}) => {
      if(loading){
        return null;
      }
      if(!error){
        return <Redirect to="/" />
      }
      return <X />
    }}
  </MeController>
);
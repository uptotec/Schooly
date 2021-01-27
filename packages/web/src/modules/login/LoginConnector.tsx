import {LoginController} from '@schooly/controller';

import { LoginPage } from './ui/loginPage/LoginPage';

export  const LoginConnector = () => (
  <LoginController>
    {({submit}) => <LoginPage submit={submit} />}
  </LoginController>
)
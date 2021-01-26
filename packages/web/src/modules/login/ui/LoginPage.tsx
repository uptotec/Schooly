import * as React from 'react';
import { LoginForm } from './loginForm';


export const LoginPage = () => {

  const submit = async (values: any) => {
    console.log(values);
    return null;
  }

  return (
    <div style={{display: 'flex'}}>
      <div style={{width: 300, margin: 'auto'}}>
        <LoginForm submit={submit} />
      </div>
    </div>
  );
};
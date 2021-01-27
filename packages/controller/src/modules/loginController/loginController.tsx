import * as React from 'react';

interface props {
  children: (
    data: { submit: (values: any) => Promise<null> }
  ) => JSX.Element | null;
}

export const LoginController: React.FunctionComponent<props> = (props) => {
  const submit = async (values: any) => {
    console.log(values);
    return null;
  }
  return props.children({submit});
};
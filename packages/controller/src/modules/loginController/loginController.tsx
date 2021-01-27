import * as React from 'react';
import { gql, useLazyQuery } from '@apollo/client';


interface props {
  children: (
    data: { submit: (values: any) => Promise<null> }
  ) => JSX.Element | null;
}

export const LoginController: React.FunctionComponent<props> = (props) => {

  const [login] = useLazyQuery(LOGIN_REQUEST, {onCompleted: data => console.log(data)});

  const submit = async (values: any) => {
    console.log(values);
    login({variables: values});
    return null;
  }

  return props.children({submit});
};


const LOGIN_REQUEST = gql`
  query($email: String!, $password: String!) {
    studentLogin(
      credentials: { email: $email, password: $password }
    ) {
      studentId
      name
      email
      facility {
        facilityId
      }
      class {
        classId
      }
      group {
        groupId
      }
    }
  }
`;
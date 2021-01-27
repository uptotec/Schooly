import * as React from 'react';
import { ApolloError, gql, useLazyQuery } from '@apollo/client';
import { Student, LoginType, Maybe } from '../../generated/graphql';


interface loginData {
  studentLogin: Maybe<Student>
}

export interface LoginControllerData { 
  submit: (values: any) => void;
  data: loginData | undefined;
  loading: boolean;
  error: ApolloError | undefined
}

interface props {
  children: (
    data: LoginControllerData
  ) => JSX.Element | null;
}


export const LoginController: React.FunctionComponent<props> = (props) => {

  const [login, {data, loading, error}] = useLazyQuery<loginData,LoginType>(LOGIN_REQUEST);

  const submit = (values: LoginType) => login({variables: values});

  return props.children({submit, data, loading, error});
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
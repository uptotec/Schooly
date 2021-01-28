import * as React from 'react';
import { gql, useLazyQuery } from '@apollo/client';
import { Student, Maybe, Staff, LoginType } from '../../../generated/graphql';
import { userTypes } from '@schooly/common';


interface Values {
  email: string,
  password: string,
  userType: 'student' | 'staff',
}

interface studentLoginData {
  studentLogin: Maybe<Student>
}

interface staffLoginData {
  staffLogin: Maybe<Staff>
}

export interface LoginControllerData { 
  submit: (values: Values) => void;
  student: {
    data: studentLoginData | undefined;
    loading: boolean;
  };
  staff: {
    data: staffLoginData | undefined;
    loading: boolean;
  }
}

interface props {
  children: (
    data: LoginControllerData
  ) => JSX.Element | null;
}


export const LoginController: React.FunctionComponent<props> = (props) => {

  const [studentLogin, {data: studentData, loading: studentLoading}] = useLazyQuery<studentLoginData,LoginType>(STUDENT_LOGIN_REQUEST);
  const [staffLogin, {data: staffData, loading: staffLoading}] = useLazyQuery<staffLoginData,LoginType>(STAFF_LOGIN_REQUEST);

  const submit = (values: Values) => {
    if(values.userType === userTypes.student){
      studentLogin({variables: {email: values.email, password: values.password}});
    }else{
      staffLogin({variables: {email: values.email, password: values.password}});
    }
  };

  return props.children({submit, student: {data: studentData, loading: staffLoading}, staff: {data: staffData, loading: staffLoading}});
};


const STUDENT_LOGIN_REQUEST = gql`
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

const STAFF_LOGIN_REQUEST = gql`
  query($email: String!, $password: String!) {
    staffLogin(
      credentials: { email: $email, password: $password }
    ) {
      staffId
      name
      email
      facility {
        facilityId
      }
    }
  }
`;
import * as React from 'react';
import { ApolloError, gql, useMutation } from '@apollo/client';
import { Mutation } from '../../../generated/graphql';
import { useUserStore } from '../../../store/user/userStore';
import { useLogoutStore } from '../../../store/logout/logoutStore';
import { useStudentStore } from '../../../store/student/studentStore';
import { useStaffStore } from '../../../store/staff/staffStore';
import { useLoginStore } from '../../../store/login/loginStore';

export interface LogoutControllerData {
  logout: () => void;
  error: ApolloError | undefined;
  data: Mutation | null | undefined;
  loading: boolean;
  called: boolean;
}

interface props {
  children: (data: LogoutControllerData) => JSX.Element | null;
}

export const LogoutController: React.FunctionComponent<props> = (props) => {
  const [logout, { loading, error, data, called }] = useMutation<Mutation>(
    LOGOUT_REQUEST
  );

  const resetData = useUserStore((state) => state.resetData);
  const setLogout = useLogoutStore((state) => state.setLogout);
  const resetStudent = useStudentStore((state) => state.setStudent);
  const resetStaff = useStaffStore((state) => state.setStaff);
  const resetLogin = useLoginStore((state) => state.setUserType);

  React.useEffect(() => {
    setLogout(logout);
  }, []);

  if (called) {
    resetData();
    resetStudent(null);
    resetStaff(null);
    resetLogin(undefined);
  }

  return props.children({ data, loading, logout, error, called });
};

const LOGOUT_REQUEST = gql`
  mutation {
    logout
  }
`;

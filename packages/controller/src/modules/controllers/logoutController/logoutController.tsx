import * as React from 'react';
import { ApolloError, gql, useMutation } from '@apollo/client';
import { Mutation } from '../../../generated/graphql';
import { useUserStore } from '../../../store/user/userStore';
import { useLogoutStore } from '../../../store/logout/logoutStore';

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

  React.useEffect(() => {
    setLogout(logout);
  }, []);

  if (called) {
    resetData();
  }

  return props.children({ data, loading, logout, error, called });
};

const LOGOUT_REQUEST = gql`
  mutation {
    logout
  }
`;

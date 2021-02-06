import * as React from 'react';
import { ApolloError, gql, useQuery } from '@apollo/client';

export interface SessionControllerData {
  data: Data | undefined;
  loading: boolean;
  error: ApolloError | undefined;
}

interface props {
  children: (data: SessionControllerData) => JSX.Element | null;
}

interface Data {
  sessionJWT: string;
}

export const SessionController: React.FunctionComponent<props> = (props) => {
  const { loading, data, error } = useQuery<Data>(SESSION_REQUEST);

  return props.children({ data, loading, error });
};

const SESSION_REQUEST = gql`
  query {
    sessionJWT
  }
`;

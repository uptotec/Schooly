import * as React from 'react';
import { ApolloError, gql, useQuery } from '@apollo/client';
import { LoginType, Me } from '../../../../generated/graphql';

export interface MeControllerData { 
  data: Data | undefined,
  loading: boolean,
  error: ApolloError | undefined
}

interface props {
  children: (
    data: MeControllerData
  ) => JSX.Element | null;
}

interface Data {
  me: Me
}


export const MeController: React.FunctionComponent<props> = (props) => {

  const {loading, data, error} = useQuery<Data,LoginType>(ME_REQUEST);

  return props.children({data, loading, error});
};

const ME_REQUEST = gql`
  query {
    me{
      userType
      email
      staffId
      studentId
    }
  }
`;
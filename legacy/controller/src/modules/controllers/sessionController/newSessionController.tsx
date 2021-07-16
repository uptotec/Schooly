import * as React from 'react';
import { gql, useMutation } from '@apollo/client';
import { CreateSessionInput } from '../../../generated/graphql';
import { useStaffStore } from '../../../store/staff/staffStore';

export interface newSessionControllerValues {
  enrollmentId: number;
  type: string;
  online: boolean;
  recurring: boolean;
  date: string | null;
  day: string | null;
  start_time: string;
  duration_mins: number;
  joinLink: string | null;
}

interface newSessionData {
  createSession: boolean;
}

export interface newSessionControllerData {
  submit: (values: newSessionControllerValues) => void;
  data: newSessionData | null | undefined;
  loading: boolean;
}

interface props {
  children: (data: newSessionControllerData) => JSX.Element | null;
}

export const NewSessionController: React.FunctionComponent<props> = (props) => {
  const [addSession, { data, loading, error }] = useMutation<
    newSessionData,
    CreateSessionInput
  >(NEW_SESSION_REQUEST);

  const refetchStaff = useStaffStore((state) => state.refetchStaff);

  const submit = (values: newSessionControllerValues) => {
    addSession({ variables: values });
  };

  React.useEffect(() => {
    refetchStaff();
  }, [data]);

  console.log(error);

  return props.children({ submit, loading, data });
};

const NEW_SESSION_REQUEST = gql`
  mutation(
    $enrollmentId: Int!
    $type: String!
    $online: Boolean!
    $recurring: Boolean!
    $day: String
    $date: String
    $start_time: String!
    $duration_mins: Int!
    $joinLink: String
  ) {
    createSession(
      session: {
        enrollmentId: $enrollmentId
        type: $type
        online: $online
        recurring: $recurring
        day: $day
        date: $date
        start_time: $start_time
        duration_mins: $duration_mins
        joinLink: $joinLink
      }
    )
  }
`;

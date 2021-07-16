import * as React from 'react';
import { ApolloError, gql, useQuery } from '@apollo/client';
import { Grade } from '../../../generated/graphql';

export interface StudentGradesControllerData {
  data: Data | undefined;
  loading: boolean;
  error: ApolloError | undefined;
}

interface props {
  children: (data: StudentGradesControllerData) => JSX.Element | null;
}

interface Data {
  meStudent: {
    grades: Grade[];
  };
}

export const StudentGradesController: React.FunctionComponent<props> = (
  props
) => {
  const { loading, data, error } = useQuery<Data>(SESSION_REQUEST);

  return props.children({ data, loading, error });
};

const SESSION_REQUEST = gql`
  query {
    meStudent {
      grades {
        exam {
          name
          totalScore
          percentage
          enrollment {
            course {
              name
              code
            }
          }
        }
        score
        gradeLetter {
          Letter
        }
      }
    }
  }
`;

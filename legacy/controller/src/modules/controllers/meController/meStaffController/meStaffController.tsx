import * as React from 'react';
import { ApolloError, gql, useQuery } from '@apollo/client';
import { Maybe, Staff } from '../../../../generated/graphql';
import { useStaffStore } from '../../../../store/staff/staffStore';

export interface StaffControllerData {
  loading: boolean;
}

interface props {
  children: (data: StaffControllerData) => JSX.Element | null;
}

interface Data {
  meStaff: Maybe<Staff>;
}

export const StaffController: React.FunctionComponent<props> = (props) => {
  const { loading, data, error, refetch } = useQuery<Data>(ME_REQUEST);
  const setStaff = useStaffStore((state) => state.setStaff);
  const setRefetchStaff = useStaffStore((state) => state.setRefetchStaff);

  setRefetchStaff(refetch);

  if (!loading && !error && data && data.meStaff) {
    setStaff(data.meStaff);
  }

  return props.children({ loading });
};

const ME_REQUEST = gql`
  query {
    meStaff {
      id
      name
      email
      facility {
        name
      }
      timetable {
        timetableId
        groupType
        recurring
        online
        date
        type
        day
        start_time
        duration_mins
        joinLink
        course {
          code
          name
          courseId
        }
        group {
          name
          class {
            department
            degree_year
            facility {
              name
            }
          }
        }
        class {
          department
          degree_year
          facility {
            name
          }
        }
      }
      teacherEnrollments {
        role
        enrollment {
          enrollmentId
          enrollmentType
          course {
            name
            code
          }
          group {
            name
            class {
              year
              department
              degree_year
              facility {
                name
              }
            }
          }
          class {
            year
            department
            degree_year
            facility {
              name
            }
          }
        }
      }
    }
  }
`;

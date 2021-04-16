import * as React from 'react';
import { ApolloError, gql, useQuery } from '@apollo/client';
import { Maybe, Student } from '../../../../generated/graphql';
import { useStudentStore } from '../../../../store/student/studentStore';

export interface StudentControllerData {
  loading: boolean;
}

interface props {
  children: (data: StudentControllerData) => JSX.Element | null;
}

interface Data {
  meStudent: Maybe<Student>;
}

export const StudentController: React.FunctionComponent<props> = (props) => {
  const { loading, data, error } = useQuery<Data>(ME_REQUEST);
  const setStudent = useStudentStore((state) => state.setStudent);

  if (!loading && !error && data && data.meStudent) {
    setStudent(data.meStudent);
  }

  return props.children({ loading });
};

const ME_REQUEST = gql`
  query {
    meStudent {
      studentId
      id
      name
      email
      facility {
        name
        facilityId
      }
      class {
        classId
        year
        department
        degree_year
      }
      group {
        name
        groupId
      }
      timetable {
        timetableId
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
        instructors {
          name
          email
          staffId
        }
      }
      courses {
        course {
          name
          code
        }
      }
    }
  }
`;

import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  meStudent?: Maybe<Student>;
  studentLogin?: Maybe<Student>;
  staffLogin?: Maybe<Staff>;
  me?: Maybe<Me>;
};


export type QueryStudentLoginArgs = {
  credentials: LoginType;
};


export type QueryStaffLoginArgs = {
  credentials: LoginType;
};

export type Student = {
  __typename?: 'Student';
  studentId: Scalars['Int'];
  id: Scalars['Int'];
  email: Scalars['String'];
  name: Scalars['String'];
  facility: Facility;
  class: Class;
  group: Group;
  timetable: Array<Timetable>;
  courses: Array<Enrollment>;
};

export type Facility = {
  __typename?: 'Facility';
  facilityId: Scalars['Int'];
  name: Scalars['String'];
  students: Array<Student>;
  classes: Array<Class>;
  groups: Array<Group>;
  staff: Staff;
};

export type Class = {
  __typename?: 'Class';
  classId: Scalars['Int'];
  year: Scalars['Int'];
  department: Scalars['String'];
  degree_year: Scalars['Int'];
  facility: Facility;
  students: Array<Student>;
  groups: Array<Group>;
};

export type Group = {
  __typename?: 'Group';
  groupId: Scalars['Int'];
  name: Scalars['String'];
  enrollments: Array<Enrollment>;
  timetable: Array<Timetable>;
  students: Array<Student>;
  facility: Facility;
  class: Class;
};

export type Enrollment = {
  __typename?: 'Enrollment';
  enrollmentId: Scalars['Int'];
  course: Course;
  group: Group;
  teacher: Staff;
  teacherAssistant: Staff;
};

export type Course = {
  __typename?: 'Course';
  courseId: Scalars['Int'];
  name: Scalars['String'];
  code: Scalars['String'];
  enrollments: Array<Enrollment>;
  timetable: Array<Timetable>;
};

export type Timetable = {
  __typename?: 'Timetable';
  timetableId: Scalars['Int'];
  type: Scalars['String'];
  day: Scalars['String'];
  start_time: Scalars['String'];
  duration_mins: Scalars['Int'];
  joinLink?: Maybe<Scalars['String']>;
  course: Course;
  group: Group;
  instructor: Staff;
};

export type Staff = {
  __typename?: 'Staff';
  staffId: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['String'];
  email: Scalars['String'];
  facility: Facility;
  teacherEnrollments: Array<Enrollment>;
  teacherAssistantEnrollments: Array<Enrollment>;
  timetable: Array<Timetable>;
};

export type LoginType = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Me = {
  __typename?: 'Me';
  userType: Scalars['String'];
  name: Scalars['String'];
  email: Scalars['String'];
  studentId?: Maybe<Scalars['Int']>;
  staffId?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  logout: Scalars['Boolean'];
};

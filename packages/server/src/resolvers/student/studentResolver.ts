import {
  Authorized,
  Ctx,
  FieldResolver,
  Query,
  Resolver,
  Root,
} from 'type-graphql';

import { Student } from '../../entity/student';
import { Timetable } from '../../entity/timetables';
import { Enrollment } from '../../entity/enrollments';
import { ContextType } from '../../types/contextType';
import { userTypes } from '@schooly/common';
import { Grade } from '../../entity/grade';

// due to a bug in @types/express-sessions we need to
// declare module interface
// here until bug fix
declare module 'express-session' {
  interface Session {
    studentId: number;
    email: string;
    facilityId: number;
    classId: number;
    groupId: number;

    userType: string;

    staffId: number;

    name: string;
  }
}

@Resolver(() => Student)
export class studentResolver {
  @Authorized(userTypes.student)
  @Query(() => Student, { nullable: true })
  meStudent(@Ctx() ctx: ContextType) {
    const studentId = ctx.req.session.studentId;

    return Student.findOne({
      where: { studentId },
      relations: ['facility', 'class', 'group'],
    });
  }

  @FieldResolver()
  timetable(@Root() student: Student) {
    return Timetable.find({
      where: [{ group: student.group }, { class: student.class }],
      relations: ['course', 'instructor'],
      order: { day: 'ASC', start_time: 'ASC' },
    });
  }

  @FieldResolver()
  courses(@Root() student: Student) {
    return Enrollment.find({
      where: { group: student.group },
      relations: ['course', 'teachers'],
    });
  }

  @FieldResolver()
  grades(@Root() student: Student) {
    return Grade.find({
      where: { student },
      relations: [
        'exam',
        'exam.enrollment',
        'exam.enrollment.course',
        'gradeLetter',
      ],
    });
  }
}

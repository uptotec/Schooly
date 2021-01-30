import {  Authorized, Ctx, FieldResolver, Query, Resolver, Root } from "type-graphql";

import { Student } from '../../entity/student';
import { Timetable } from '../../entity/timetables';
import { Enrollment } from '../../entity/enrollments';
import { ContextType } from '../../types/contextType';
import { userTypes } from '@schooly/common';

// due to a bug in @types/express-sessions we need to
// declare module interface
// here until bug fix
declare module "express-session" {
  interface Session {
    studentId: number;
    email: string;
    facilityId: number;
    classId:number;
    groupId: number;

    userType: string,

    staffId: number;

  }
}


@Resolver(() => Student)
export class studentResolver {

  @Authorized(userTypes.student)
  @Query(() => Student, {nullable: true})
  meStudent(
    @Ctx() ctx:ContextType
  ){
    const studentId = ctx.req.session.studentId;

    return Student.findOne({where: {studentId}, relations:['facility', 'class', 'group']});
  }

  @FieldResolver()
  timetable(@Root() student: Student) {
    return Timetable.find({where: {group: student.group}, relations: ["course", "instructor"]});
  }

  @FieldResolver()
  courses(@Root() student: Student) {
    return Enrollment.find({where: {group: student.group}, relations: ['course', 'teacher', 'teacherAssistant']});
  }

}
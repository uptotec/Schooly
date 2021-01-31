import { Arg, Ctx, Query, Resolver } from "type-graphql";
import bcrypt from 'bcrypt';

import { Student } from '../../entity/student';
import { loginType } from './loginInput';
import { Staff } from '../../entity/staff';
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
    groupId: number

    userType: string,

    staffId: number;

    name: string;

  }
}

/**
 * * Login Resolver manages login validations and sessions
 * @method studentLogin manages sign in for student accounts only
 * @param loginType {email, password}
 * @returns student object and session cookie
 * 
 * @method staffLogin manages sign in for staff accounts only
 * @param loginType {email, password}
 * @returns staff object and session cookie
 * 
 * TODO try to join both method in one
 * 
 */

@Resolver()
export class loginResolver {

  @Query(() => Student, {nullable: true})
  async studentLogin(
    @Arg("credentials", () => loginType) {email, password}: loginType,
    @Ctx() ctx: ContextType
  ): Promise<Student | undefined>
  {

    const student = await Student.findOne({where: {email}, relations:['facility', 'class', 'group']});

    if(!student)
    return undefined;

    const valid = await  bcrypt.compare(password, student.password);

    if(!valid)
    return undefined;

    ctx.req.session.userType = userTypes.student;
    ctx.req.session.studentId = student.studentId;
    ctx.req.session.name = student.name;
    ctx.req.session.email = student.email;
    ctx.req.session.facilityId = student.facility.facilityId;
    ctx.req.session.classId = student.class.classId;
    ctx.req.session.groupId = student.group.groupId;

    return valid ? student : undefined;

  }



  @Query(() => Staff, {nullable: true})
  async staffLogin(
    @Arg("credentials", () => loginType) {email, password}: loginType,
    @Ctx() ctx: ContextType
  ): Promise<Staff | undefined>
  {
    const staff =  await Staff.findOne({where: {email},relations: ["facility"]});

    if(!staff)
    return undefined;

    const valid = await  bcrypt.compare(password, staff.password);

    if(!valid)
    return undefined;

    ctx.req.session.userType = userTypes.staff;
    ctx.req.session.studentId = staff.staffId;
    ctx.req.session.name = staff.name;
    ctx.req.session.email = staff.email;
    ctx.req.session.facilityId = staff.facility.facilityId;

    return staff;

  }

}
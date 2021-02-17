import {  Authorized, Ctx, Query, Resolver } from "type-graphql";

import { ContextType } from '../../types/contextType';
import { userTypes } from '@schooly/common';
import { Staff } from '../../entity/staff';

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

    name: string;

  }
}


@Resolver(() => Staff)
export class staffResolver {

  @Authorized(userTypes.staff)
  @Query(() => Staff, {nullable: true})
  meStaff(
    @Ctx() ctx:ContextType
  ){
    const staffId = ctx.req.session.staffId;

    return Staff.findOne({where: {staffId}, relations:['facility', 'timetable', 'timetable.group', 'timetable.group.class', 'timetable.group.class.facility', 'timetable.course']});
  }
}
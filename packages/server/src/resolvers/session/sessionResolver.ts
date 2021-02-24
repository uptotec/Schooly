import {  Arg, Authorized, Ctx, Mutation, Resolver } from 'type-graphql';
import { userTypes } from '@schooly/common';
import crypto from 'crypto';

import { ContextType } from '../../types/contextType';
import { createSessionInput } from './sessionInput';
import { Timetable } from '../../entity/timetables';

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

@Resolver()
export class sessionResolver {
  @Authorized(userTypes.staff)
  @Mutation(() => Boolean)
  async createSession(
    @Ctx() ctx: ContextType,
    @Arg("session",() => createSessionInput) session: createSessionInput
    ) {
    const staffId =ctx.req.session.staffId;
    const {
      type,
      groupType,
      online,
      recurring,
      date,
      day,
      start_time,
      duration_mins,
      joinLink,
      course,
      group,
      class: classId
    } = session;

    const newSession = new Timetable();

    newSession.type = type;
    newSession.groupType = groupType;
    newSession.online = online;
    newSession.recurring = recurring;
    newSession.date = date;
    newSession.day = day;
    newSession.start_time = start_time;
    newSession.duration_mins = duration_mins;
    newSession.joinLink = joinLink || crypto.randomBytes(16).toString("hex");
    newSession.courseId = course;
    newSession.groupId = group;
    newSession.classId = classId;
    newSession.instructorId = staffId;


    try {
      await newSession.save();
      return true;
    }catch(err){
      console.log(err);
      return false;
    }

  }
}

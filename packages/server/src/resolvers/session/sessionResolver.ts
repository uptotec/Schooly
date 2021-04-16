import { Arg, Authorized, Ctx, Mutation, Resolver } from 'type-graphql';
import { userTypes } from '@schooly/common';
import crypto from 'crypto';
import isUrl from 'is-url';

import { ContextType } from '../../types/contextType';
import { createSessionInput } from './sessionInput';
import { Timetable } from '../../entity/timetables';
import { Enrollment } from '../../entity/enrollments';
import { Int } from 'type-graphql';

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

@Resolver()
export class sessionResolver {
  @Authorized(userTypes.staff)
  @Mutation(() => Boolean)
  async createSession(
    @Ctx() ctx: ContextType,
    @Arg('session', () => createSessionInput) session: createSessionInput
  ) {
    const staffId = ctx.req.session.staffId;

    const {
      type,
      online,
      recurring,
      date,
      day,
      start_time,
      duration_mins,
      joinLink,
      enrollmentId,
    } = session;

    const enrollment = await Enrollment.findOne(enrollmentId, {
      relations: ['teachers'],
    });

    if (!enrollment) {
      return false;
    }

    let flag = false;

    for (let teacherEnrollment of enrollment?.teachers!) {
      if (teacherEnrollment.teacherId === staffId) {
        flag = true;
      }
    }

    if (!flag) {
      return false;
    }

    let selectedDate = null,
      selectedDay = null,
      selectedJoinLink = null;

    if (recurring) {
      if (!day) {
        return false;
      }
      selectedDay = day;
    } else {
      if (!date) {
        return false;
      }
      selectedDate = date;
    }

    if (joinLink) {
      selectedJoinLink = isUrl(joinLink) ? joinLink : `http://${joinLink}`;
    }

    const generatedUrl = online ? crypto.randomBytes(16).toString('hex') : null;

    const newSession = new Timetable();

    newSession.type = type;
    newSession.groupType = enrollment.enrollmentType;
    newSession.online = online;
    newSession.recurring = recurring;
    newSession.date = selectedDate;
    newSession.day = selectedDay;
    newSession.start_time = start_time;
    newSession.duration_mins = duration_mins;
    newSession.joinLink = selectedJoinLink || generatedUrl;
    newSession.courseId = enrollment.courseId;
    newSession.groupId = enrollment.groupId;
    newSession.classId = enrollment.classId;
    newSession.instructorsIds = [staffId];

    try {
      await newSession.save();
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  @Authorized(userTypes.staff)
  @Mutation(() => Boolean)
  async deleteSession(
    @Ctx() ctx: ContextType,
    @Arg('sessionId', () => Int) timetableId: number
  ) {
    const timetable = await Timetable.findOne(timetableId);

    let flag = false;

    for (let instructor of timetable?.instructors!) {
      if (instructor.staffId === ctx.req.session.staffId) {
        flag = true;
        break;
      }
    }

    if (!flag) {
      return false;
    }

    try {
      await Timetable.delete(timetableId);
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
}

import { Authorized, Ctx, Query, Resolver } from 'type-graphql';
import lodash from 'lodash';

import { ContextType } from '../../types/contextType';
import { userTypes } from '@schooly/common';
import { Staff } from '../../entity/staff';

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

@Resolver(() => Staff)
export class staffResolver {
  @Authorized(userTypes.staff)
  @Query(() => Staff, { nullable: true })
  async meStaff(@Ctx() ctx: ContextType) {
    const staffId = ctx.req.session.staffId;

    const staff = await Staff.findOne({
      where: { staffId },
      relations: [
        'facility',
        'timetable',
        'timetable.class',
        'timetable.class.facility',
        'timetable.group',
        'timetable.group.class',
        'timetable.group.class.facility',
        'timetable.course',
        'teacherEnrollments',
        'teacherEnrollments.enrollment',
        'teacherEnrollments.enrollment.course',
        'teacherEnrollments.enrollment.group',
        'teacherEnrollments.enrollment.group.class',
        'teacherEnrollments.enrollment.group.class.facility',
        'teacherEnrollments.enrollment.class',
        'teacherEnrollments.enrollment.class.facility',
      ],
    });
    console.log(staff?.teacherEnrollments);
    const sortedTimetable = lodash.orderBy(
      staff?.timetable,
      ['day', 'start_time'],
      ['asc', 'asc']
    );

    return { ...staff, timetable: sortedTimetable };
  }
}

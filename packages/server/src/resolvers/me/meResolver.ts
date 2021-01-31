import {  Authorized, Ctx, Field, Int, ObjectType, Query, Resolver } from "type-graphql";

import { ContextType } from '../../types/contextType';

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

@ObjectType()
class Me {
  @Field()
  userType: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field( () => Int,{nullable: true})
  studentId: number;

  @Field( () => Int,{nullable: true})
  staffId: number;
}


@Resolver(() => Me)
export class meResolver {

  @Authorized()
  @Query(() => Me, {nullable: true})
  me(
    @Ctx() ctx:ContextType
  ){
    const session = ctx.req.session;

    return {userType: session.userType, name: session.name, email: session.email, studentId: session.studentId || null, staffId: session.staffId || null};
  }

}
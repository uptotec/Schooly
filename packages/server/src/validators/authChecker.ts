import { AuthChecker } from "type-graphql";
import { ContextType } from '../types/contextType';

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

  }
}


export const AuthCheckerFn: AuthChecker<ContextType> = (
  { context },
  roles,
) => {
  const session = context.req.session;

  console.log(session.userType, roles)

  if(!session.userType)
  return false;

  if(roles.length != 0){
    for(const role of roles){
      if(session.userType === role){
        return true
      }
    }
    return false;
  }

  return true
};
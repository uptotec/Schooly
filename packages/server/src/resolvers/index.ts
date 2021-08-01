import { studentResolver } from './student/studentResolver';
import { loginResolver } from './login/loginResolver';
import { meResolver } from './me/meResolver';
import { logoutResolver } from './logout/logoutResolver';
import { onlineSessionResolver } from './session/onlineSessionResolver';
import { staffResolver } from './staff/staffResolver';
import { sessionResolver } from './session/sessionResolver';

const resolvers = [
  studentResolver,
  loginResolver,
  meResolver,
  logoutResolver,
  onlineSessionResolver,
  staffResolver,
  sessionResolver,
] as const;

export default resolvers;

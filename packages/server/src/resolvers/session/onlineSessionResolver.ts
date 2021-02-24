import {  Authorized, Ctx, Query, Resolver } from 'type-graphql';
import jwt from 'jsonwebtoken';

import { ContextType } from '../../types/contextType';

const payload = {
  context: {
    user: {
      name: '',
      email: '',
    },
  },
  aud: 'jitsi',
  iss: 'schooly',
  sub: 'meet.schooly.tk',
  room: '*',
  moderator: false,
};

@Resolver()
export class onlineSessionResolver {
  @Authorized()
  @Query(() => String)
  sessionJWT(@Ctx() ctx: ContextType) {
    const session = ctx.req.session;

    const jwtPayload = {...payload};

    jwtPayload.context.user.name = session.name;
    jwtPayload.context.user.email = session.email;

    if(session.userType === 'staff'){
      jwtPayload.moderator = true
    }

    const jsonWebToken = jwt.sign(jwtPayload, 'SuperPassword', {
      expiresIn: 60 * 2,
    });

    return jsonWebToken;
  }
}

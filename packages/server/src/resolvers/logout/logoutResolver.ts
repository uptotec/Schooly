import {  Authorized, Ctx, Mutation, Resolver } from "type-graphql";

import { ContextType } from '../../types/contextType';


@Resolver()
export class logoutResolver {

  @Authorized()
  @Mutation(() => Boolean)
  logout(
    @Ctx() ctx:ContextType
  ): Promise<Boolean>{

    return new Promise( (res, rej) => {
      ctx.req.session.destroy((err) => {
        if(err){
          return rej(false);
        }

        ctx.res.clearCookie('qid');
        return res(true);
      });
    });
  }

}
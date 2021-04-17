import 'reflect-metadata';
import { createConnection, getConnectionOptions } from 'typeorm';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import session from 'express-session';
import connectRedis from 'connect-redis';

import { studentResolver } from './resolvers/student/studentResolver';
import { redis } from './redis';
import { loginResolver } from './resolvers/login/loginResolver';
import { AuthCheckerFn } from './validators/authChecker';
import { meResolver } from './resolvers/me/meResolver';
import { logoutResolver } from './resolvers/logout/logoutResolver';
import { onlineSessionResolver } from './resolvers/session/onlineSessionResolver';
import { staffResolver } from './resolvers/staff/staffResolver';
import { sessionResolver } from './resolvers/session/sessionResolver';

(async () => {
  const app = express();

  const options = await getConnectionOptions(
    process.env.NODE_ENV || 'development'
  );
  await createConnection({ ...options, name: 'default' });

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [
        studentResolver,
        loginResolver,
        meResolver,
        logoutResolver,
        onlineSessionResolver,
        staffResolver,
        sessionResolver,
      ],
      validate: true,
      authChecker: AuthCheckerFn,
    }),
    context: ({ req, res }) => ({ req, res }),
    tracing: true,
  });

  const RedisStore = connectRedis(session);

  app.use(
    session({
      store: new RedisStore({
        client: redis,
      }),
      name: 'qid',
      secret:
        'cajFDTkg-X3QBYJAH&yfs%D9Mc5u-thm_4S5fFRbC?gKuupdy97LMBycGNUvjNVC*=97z5kbvAcfts?ab#_xze_4sQ?#Xaw@XcaWbD3%xL#55Dhfs=#+JUY8MhsHhnr#uvBFPURxHueJvjuNP7$C-x7m*CAGt+pfA+x*3D=RddQdutvYPDs6XDEXqPc!yXa$xSLWA5G9dgnpLmFe_R4kH3tN+pNyfn=ZHeW$W?f-v*qktBvA4^8YY8ksrLqWFBTG&g^74SY#CUJGj!xXZUVk!qUv$Qp_F%ATHKj&yAk4jpeLkP&G$*bc@t#UJa!4n+TqGSbn9L#L&FxXg@BUBd+%c+f3@E2wTM37PmzSbY*DHBfJ8WZLRm8_JGe7QMhRG%Cjx4L?cHw2G&@k6$_Jkh4v9fGD?*G-XnkNQt2?nE9W3=7FHRm%NNEkbd7cZcetGv48SeHcWqTUECfnR9_nSkSLc@yv$cPyd5RN?qfpUt%+8#SM785xAsYLHu&Y4#tf&dFy',
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 1000 * 60 * 60 * 24 * 7 * 52 * 7,
      },
    })
  );

  apolloServer.applyMiddleware({
    app,
    cors: {
      origin: [
        'http://localhost:3000',
        process.env.SITE_URL || 'http://192.168.1.5:3000',
      ],
      credentials: true,
    },
  });
  const port = process.env.PORT || 4000;
  app.listen(port, () => {
    console.log(`server started at http://localhost:${port}/graphql`);
  });
})();

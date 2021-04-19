FROM node:latest

WORKDIR /Schooly

COPY ./package.json .
COPY ./packages/common/package.json ./packages/common/
COPY ./packages/controller/package.json ./packages/controller/
COPY ./packages/web/package.json ./packages/web/
COPY ./packages/server/package.json ./packages/server/

RUN yarn install --production

COPY ./packages/common/dist ./packages/common/dist/
COPY ./packages/controller/dist ./packages/controller/dist/
COPY ./packages/web/build ./packages/web/build/
COPY ./packages/server/dist ./packages/server/dist/
COPY ./ormconfig.js .

WORKDIR /Schooly/packages/server/dist

ENV NODE_ENV=production
ENV SITE_URL=https://ilearnsvu.com
ENV REACT_APP_SERVER_URL=https://ilearnsvu.com/graphql
ENV SITE_DOMAIN=ilearnsvu.com
ENV SERVE_FRONT=true

EXPOSE 4000

CMD ["node", "index.js"]
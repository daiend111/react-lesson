FROM node:14.15.0-alpine

RUN apk add --no-cache bash \
 && apk add --no-cache python

RUN yarn install

WORKDIR /app

EXPOSE 3000

CMD ["yarn", "run", "start"]

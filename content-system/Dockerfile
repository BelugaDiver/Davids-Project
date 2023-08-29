FROM node:16-alpine

ENV PORT 1337
ENV HOST 0.0.0.0
ENV NODE_ENV production

# create app dir
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# install deps
COPY package*.json /usr/src/app/
RUN npm install

COPY . /usr/src/app/

ENV DATABASE_CLIENT=mysql
ENV DATABASE_HOST=content-db.mysql.database.azure.com
ENV DATABASE_PORT=3306
ENV DATABASE_NAME=contentsystemdb
ENV DATABASE_USERNAME=cmsuser
ENV DATABASE_PASSWORD=cms-password
ENV DATABASE_SSL=true

RUN npm run build
EXPOSE 1337

CMD ["npm", "start"]
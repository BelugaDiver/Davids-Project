FROM node:18-alpine

ENV PORT 3000
ENV HOST 0.0.0.0
ENV NODE_ENV production

# create app dir
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# install deps
COPY package*.json /usr/src/app/
RUN npm install

COPY . /usr/src/app/

RUN npm run build
EXPOSE 3000

CMD ["npm", "start"]
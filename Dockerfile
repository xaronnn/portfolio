FROM node:8.15.0-alpine

WORKDIR /docker/app
COPY package*.json /docker/app/
RUN npm install
COPY / /docker/app/

CMD npm start


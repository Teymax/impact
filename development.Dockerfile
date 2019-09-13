FROM circleci/node:10-browsers

USER root

RUN mkdir /app

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

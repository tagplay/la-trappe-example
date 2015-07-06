FROM node:0.12-slim

ENV TOKEN "UNSET"

COPY . /app
WORKDIR /app
RUN npm install --production; npm cache clean

CMD "npm start"

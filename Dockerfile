FROM node:12.19.0-alpine3.9

WORKDIR /usr/src/app

COPY . .

ENV PORT=3000

RUN npm install

EXPOSE $PORT

ENTRYPOINT ["npm", "run", "start"]

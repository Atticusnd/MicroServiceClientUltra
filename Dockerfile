FROM node:12.19.0-alpine3.9

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 3000

ENTRYPOINT ["npm", "run", "start"]

# FROM node:10 AS builder
# WORKDIR /usr/app
# COPY ./package.json ./
# RUN npm install
# COPY ./src .
# RUN npm run build


# # Second Stage : Setup command to run your app using lightweight node image
# FROM node:10-alpine
# WORKDIR /usr/app
# COPY --from=builder /usr/app ./
# EXPOSE 3000
# CMD ["node", "dist/main"]
# CMD ["node", "run", "start"]

FROM node:16

# Create app directory
WORKDIR /usr/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "node", "run", "start" ]
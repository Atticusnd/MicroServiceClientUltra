### This is the client service from Game-Publisher task

I Created an API using NestJS, the CRUD is on `/game` endpoint, You can try with [This postman collection](https://github.com/Atticusnd/MicroServiceClientUltra/blob/main/postman-collection.json) to request the endpoints, examples of the endpoints:

To Create:

<img width="702" alt="Screen Shot 2022-02-14 at 12 53 16" src="https://user-images.githubusercontent.com/96081883/153939282-85e589dc-86e7-4d21-acef-9a760a18758e.png">

To get all games(Publisher data is also there):

<img width="987" alt="Screen Shot 2022-02-14 at 13 59 46" src="https://user-images.githubusercontent.com/96081883/153939069-b225997a-0e4e-4745-b491-f62ebb8b0466.png">

To get a game by ID:

<img width="619" alt="Screen Shot 2022-02-14 at 12 54 50" src="https://user-images.githubusercontent.com/96081883/153939637-55e2717b-b271-4e58-a831-3a7747152617.png">

To delete a game(by ID):

<img width="601" alt="Screen Shot 2022-02-14 at 12 56 52" src="https://user-images.githubusercontent.com/96081883/153939593-9fdabcb8-06f8-4542-8d53-40ea785072f8.png">


**But where is the other microservice?** Well the other microservice is waiting to receive a message to trigger the process on the database to apply a discount or remove from the catalog this is the example:

<img width="1199" alt="Screen Shot 2022-02-14 at 14 08 15" src="https://user-images.githubusercontent.com/96081883/153938565-c874ea42-53cd-47bc-8ee0-67e19b28dc25.png">

This microservice is connected by using [TCP transport](https://docs.nestjs.com/microservices/basics)

## Docs you can access to Swagger docs on http:localhost:3000/api 

<img width="1470" alt="Screen Shot 2022-02-14 at 12 56 37" src="https://user-images.githubusercontent.com/96081883/153939506-c517a12a-e64a-4248-83e2-8f71f8e06d68.png">

# How to run
## Using Docker

```bash
$ docker-compose up
```

Please also clone and run the [process service](https://github.com/Atticusnd/MicroserviceProcess) 
## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```



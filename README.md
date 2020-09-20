# Seed Node JS 

This application was developed to be used as a template for NodeJS APIs. It includes a simple app that allows you to perform bibliographic references management. It uses jest for tests, mysql as database, and express as the framework. Any contribution is Wellcome. I hope it helps new developers to start their apps. If you will create a big application with several interfaces (i.e., http and amqp protocols) I really recommend you use Hexagonal Architecture with typescript. I will create a new template with this approach soon. 

## Architecture

```
.
├── CHANGELOG.md
├── docs
│   └── swagger.yml
├── knexfile.js
├── migrations
│   └── 20200418201308_create_table_reference.js
└── src
    ├── app.js
    ├── container
    │   ├── index.js
    │   ├── integrations
    │   ├── models
    │   │   ├── __tests__
    │   │   │   ├── reference.integration.test.js
    │   │   │   └── reference.unit.test.js
    │   │   └── reference.js
    │   └── services
    │       ├── __tests__
    │       │   ├── reference.integration.test.js
    │       │   └── reference.unit.test.js
    │       └── reference.js
    ├── env.js
    ├── helpers
    │   ├── database.js
    │   └── error.js
    ├── http
    │   ├── controllers
    │   │   ├── __tests__
    │   │   │   ├── reference.integration.test.js
    │   │   │   └── reference.unit.test.js
    │   │   └── reference.js
    │   ├── index.js
    │   ├── middlewares
    │   │   ├── errorHandler.js
    │   │   └── validator.js
    │   ├── routes
    │   │   ├── index.js
    │   │   └── v1
    │   │       ├── index.js
    │   │       └── reference.js
    │   └── schemas
    │       └── v1
    │           ├── __tests__
    │           │   └── reference.unit.test.js
    │           └── reference.js
    ├── index.js
    └── logger.js
```

## Documentation

The documentation was developed based on the Open API specification. You can see the doc running:

```
npx redoc-cli serve docs/swagger.yml
```

## How to use

Firstly, we should clone the repository:
```
git clone https://github.com/marqueswsm/seed-node.git
```

Then, it is necessary to create a copy of the file called `.env.sample` and rename it to `.env`. It will provide some environment variables that our app needs to run properly. You can now set your database information. I recommend you to use Docker to exec a mysql database. If you have docker installed, execute:
```bash
docker run -p 3306:3306 --name mysql -e MYSQL_ROOT_PASSWORD=root -e MYSQL_ROOT_HOST=% -d mysql/mysql-server:5.7
```

Now, we need to create a database:
```bash
docker exect -it mysql /bin/bash
```
> Access the container

```bash
mysql -u root -p 
```
> Connect to the mysql server

```bash
create database seednode;
```
> Create database

Wow! Now we have a database. Then we can run our migrations:
```
npm run migrate:up
```

Finally, we can run our app:
```bash
npm run dev
```

## Tests

In this app I performed unit and integration tests. These files are created inside the `__tests__` folders:

```bash
├── container
│   ├── index.js
│   ├── integrations
│   ├── models
│   │   ├── __tests__
│   │   │   ├── reference.integration.test.js
│   │   │   └── reference.unit.test.js
│   └── services
│       ├── __tests__
│       │   ├── reference.integration.test.js
│       │   └── reference.unit.test.js
├── http
│   ├── controllers
│   │   ├── __tests__
│   │   │   ├── reference.integration.test.js
│   │   │   └── reference.unit.test.js
│   ├── routes
│   │   ├── index.js
│   │   └── v1
│   │       ├── index.js
│   │       └── reference.js
│   └── schemas
│       └── v1
│           ├── __tests__
│           │   └── reference.unit.test.js
│           └── reference.js
```

#### License:

MIT
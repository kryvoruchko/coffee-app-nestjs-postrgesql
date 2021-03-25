<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" height="100" alt="Nest Logo" /></a>
</p>
<p align="center">
    <a href="https://www.postgresql.org/" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png" height="100" alt="PostgresQL Logo" /></a>
</p>
<p align="center">
  <a href="https://hub.docker.com/" target="blank"><img src="https://timeweb.com/ru/community/article/8c/8cff847e5476455166bc8e4fc0778338.png" height="100" alt="Docker Logo" /></a>
</p>

## Installation

```bash
$ npm install
```

## Running the app

```bash
# docker
$ docker-compose up -d

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Structure
- [coffees](https://github.com/kryvoruchko/coffee-app-nestjs-postrgesql/tree/main/src/coffees)
  - [dto](https://github.com/kryvoruchko/coffee-app-nestjs-postrgesql/tree/main/src/coffees/dto)
  - [entities](https://github.com/kryvoruchko/coffee-app-nestjs-postrgesql/tree/main/src/coffees/entities)
- [common](https://github.com/kryvoruchko/coffee-app-nestjs-postrgesql/tree/main/src/common)
  - [decorators](https://github.com/kryvoruchko/coffee-app-nestjs-postrgesql/tree/main/src/common/decorators)
  - [dto](https://github.com/kryvoruchko/coffee-app-nestjs-postrgesql/tree/main/src/common/dto)
  - [filters](https://github.com/kryvoruchko/coffee-app-nestjs-postrgesql/tree/main/src/common/filters)
  - [guards](https://github.com/kryvoruchko/coffee-app-nestjs-postrgesql/tree/main/src/common/guards)
  - [interceptors](https://github.com/kryvoruchko/coffee-app-nestjs-postrgesql/tree/main/src/common/interceptors)
  - [middlewares](https://github.com/kryvoruchko/coffee-app-nestjs-postrgesql/tree/main/src/common/moddleware)
  - [pipes](https://github.com/kryvoruchko/coffee-app-nestjs-postrgesql/tree/main/src/common/pipes)
- [config](https://github.com/kryvoruchko/coffee-app-nestjs-postrgesql/tree/main/src/config)
- [database](https://github.com/kryvoruchko/coffee-app-nestjs-postrgesql/tree/main/src/database)
- [events](https://github.com/kryvoruchko/coffee-app-nestjs-postrgesql/tree/main/src/events)
- [migrations](https://github.com/kryvoruchko/coffee-app-nestjs-postrgesql/tree/main/src/migrations)

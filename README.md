<h1 align="center"><strong>Techrace API</strong></h1>

<div align="center"><h2>🚀 This Api is built with the following stack: Node js - Express - TypeScript - PostgreSQL - Prisma </h2></div>

<h1 align="center">

![](./docs/readme/stack.png)

</h1>

## Installation

Create .env file and add port, database url, mqtt url and api key

```sh
PORT=3002

TIMEOUT=60000

NODE_ENV=development

DATABASE_URL=postgresql://user:password@host:port/database

MQTT_URL=mqtt://IP:PORT

API_KEY=key
```

Install project dependencies

```sh
npm install
```

Launch Docker and start services

```sh
docker-compose up --build
```

Apply migrations

```sh
npx prisma migrate dev
```

Generate prisma client

```sh
npx prisma generate
```

Start the project in dev mode

```sh
npm run dev
```

## Api documentation

To access the documentation,

```sh
# Type the following url into your browser

http://localhost:3002/api-docs/
```

<h1 align="center">

![](./docs/readme/swagger.png)

</h1>

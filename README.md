<h1 align="center"><strong>Techrace API</strong></h1>

<div align="center"><h2>🚀 Cet Api est construit avec la stack : Node js - Express - TypeScript - PostgreSQL - Prisma </h2></div>

<h1 align="center">

![](./docs/readme/stack.png)

</h1>

## Installation

Créer le fichier .env et ajouter la connexion a la base de données et le numero du port

```sh
PORT=3002

TIMEOUT=60000

NODE_ENV=development

DATABASE_URL=postgresql://user:password@host:port/database

MQTT_URL=mqtt://192.168.0.100:1883

API_KEY=key
```

Installer les dépendences du projet

```sh
npm install
```

Lancer Docker et démarrer les services

```sh
docker-compose up --build
```

Appliquer les migrations

```sh
npx prisma migrate dev
```

Générer le client prisma

```sh
npx prisma generate
```

Démarrer le projet en mode dev

```sh
npm run dev
```

## Documentation de l'Api

Pour accéder à la documentation,

```sh
# Tapper l'url suivant dans votre navigateur

http://localhost:3002/api-docs/
```

<h1 align="center">

![](./docs/readme/swagger.png)

</h1>

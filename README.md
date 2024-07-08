<h1 align="center"><strong>Techrace API</strong></h1>

<div align="center"><h2>🚀 Cet Api est construit avec la stack : Node js - Express - TypeScript - PostgreSQL - Prisma </h2></div>

<h1 align="center">

![](./docs/readme/stack.png)

</h1>

## Installation

Installer les dépendences du projet

```sh
npm install
```

Créer le fichier .env et ajouter la connexion a la base de données et le numero du port

```sh
# Numero du port
PORT="3002"

# Timeout
TIMEOUT="60000"

# Environnement
NODE_ENV="development"

# Access a la base de donnees
DATABASE_URL="postgresql://user:password@host:port/database"

# API KEY
PORT="key"
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

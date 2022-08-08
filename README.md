# fraseary
Web de frases

#SvelteKit

# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm init svelte

# create a new project in my-app
npm init svelte my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.


#How to
## meta data acerca del proyecto
autores: 1438
frases: 10619
tags: 858

## listar npm modulos globales
- `npm list -g --depth 0`

## usar diferentes versiones de node
### listar versiones de node instaladas
- `nvm list`

### instalar versión específica de node
- `nvm install [node version]`

### saltar entre versiones de node
- `nvm use [node version]`

## comandos webpack para hacer build y servir bundle
- webpack serve
- webpack --mode production
- webpack-dev-server --open --mode development
- webpack-dev-server --mode development
- webpack-dev-server --inline --hot

## leer documentacion de sapper y svelte
- npm run dev

# Deploy

### Clonar repo en ~/dev/frases
- `git clone git@github.com:zrobit/frases.git web`

### Mongo commands
#### Iniciar MongoDB
- `sudo service mongod start`

#### Detener MongoDB
- `sudo service mongod stop`
#### Listar base de datos dentro de la shell MongoDB
- `> show dbs`

#### Exportar base de datos MongoDB
- `mongodump -d <database_name> -o <directory_backup>`

#### Importar base de datos MongoDB
- `mongorestore -d <database_name> <directory_backup>`

### Instalar Nginx
- `sudo apt-get update`
- `sudo apt-get install nginx`

### Detener, parar resetear Nginx
- `sudo systemctl stop nginx`
- `sudo systemctl start nginx`
- `sudo systemctl restart nginx`
- `sudo systemctl reload nginx`


### Instalar npm packages
- `npm install --only=prod`
- `npm install --only=dev`

### Instalar npm packages globales
- `sudo npm install -g gulp pm2`

### Build client app, server app and assets
#### Build production: app + assets
- `npm run build:prod`

#### Build solo assets con gulp
- `npm run build:gulp`

### Run pm2
- `NODE_ENV=production pm2 start src/server`

# Utilidades:

## Subir a directorio vía scp:
- `scp -r <path/to/file/or/dir> user@<remote_host>:<remote_path>`

## Descargar de servidor vía scp:
- `scp -r <user>@<remote_host>:/path/to/remote/dir/ /path/to/dir/`


#Data base flags
## Authors flags
1. isDeleted
2. isPerson

|isDeleted| 0 | 0 | 0 | 1 |
|---------|---|---|---|---|
|isPerson | 0 | 0 | 1 | 0 |
|---------|---|---|---|---|
|x        | 0 | 1 | 0 | 0 |
|---------|---|---|---|---|
|y        | 1 | 0 | 0 | 0 |
|---------|---|---|---|---|


|default  | 0 | 0 | 1 | 0 | = 2

|ejm x    | 0 | 0 | 1 | 0 | = 2
|ejm y    | 0 | 1 | 1 | 1 | = 7
|ejm z    | 1 | 0 | 1 | 0 | = 10


## Quote flags
1. isDeleted
2. isAdage


|isDeleted| 0 | 0 | 0 | 1 |
|---------|---|---|---|---|
|isAdage  | 0 | 0 | 1 | 0 |
|---------|---|---|---|---|

|default  | 0 | 0 | 0 | 0 | = 0

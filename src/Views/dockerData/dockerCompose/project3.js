const code = [
  `
# directorio 
>data/mysql
>models/
--index.js
--User.js
>modules/
>node_modules
>routes/
--index.js
.env
app.js
Dockerfile 
docker-compose.yml
package.json
`,
  `
# Dockerfile
# una imagen custom para hacer por separado el npm i
# es decir una capa con esto, y cuando se levanta ya es muy rapido

FROM node:11.15.0

RUN mkdir -p /app/node_modules && chown -R node:node /app
WORKDIR /app

COPY package*.json ./
USER node

RUN npm i 
COPY --chown=node:node . .

ENV REACT_ENV_EXAMPLE personas
EXPOSE 3001
`,
];

const data = [
  {
    version: "3.3",
    services: {
      db: {
        container_name: "mysql_nowpys_container",
        image: "mysql:5.7",
        restart: "always",
        command:
          "mysqld --sql_mode=\"\" --character-set-server=utf8 --collation-server=utf8_general_ci --init-connect='SET NAMES UTF8;' --innodb-flush-log-at-trx-commit=0",
        environment: {
          MYSQL_DATABASE: "mysql_nowpys_db",
          MYSQL_USER: "root",
          MYSQL_PASSWORD: "facebook98",
          MYSQL_ROOT_PASSWORD: "facebook98",
        },
        networks: ["developnet"],
        volumes: ["./data/mysql/:/var/lib/mysql"],
        ports: ["3306:3306"],
      },
      api: {
        container_name: "node_nowpys_container",
        tty: true,
        image: "node_nowpys_image",
        build: ".",
        ports: ["3001:3001"],
        working_dir: "/app",
        volumes: [".:/app", "node_modules:/app/node_modules"],
        env_file: [".env"],
        depends_on: ["db"],
        networks: ["developnet"],
        command: "sh -c 'npm run dev'",
      },
    },
    volumes: {
      node_modules: null,
    },
    networks: {
      developnet: {
        external: true,
      },
    },
  },
];

export { data, code };

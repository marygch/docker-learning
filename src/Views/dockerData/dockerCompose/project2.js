const code = [`
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
`];

const data = [{
  version: "3.3",
  services: {
    api: {
      container_name: "nucleus_node",
      image: "mycustomimage2",
      build: ".",
      ports: ["3001:3001"],
      working_dir: "/app",
      volumes: [".:/app", "node_modules:/app/node_modules"],
      command: "sh -c 'npm run dev'",
    },
  },
  volumes: {
    node_modules: null,
  },
}];

export { data, code };

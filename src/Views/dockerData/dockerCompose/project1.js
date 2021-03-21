const code = [`
# Dockerfile
FROM node:11.15.0
RUN mkdir -p /app/node_modules && chown -R node:node /app
WORKDIR /app

COPY package*.json ./
USER node
RUN npm install

COPY --chown=node:node . .
ENV REACT_ENV_EXAMPLE personas
EXPOSE 3001
`];

const data = [
  {
    version: "3.3",
    services: {
      api: {
        container_name: "nucleus-node",
        image: "custom-node-image",
        build: ".",
        command: "sh -c 'npm run dev'",
        ports: ["8080:3001"],
      },
    },
  },
];

export { data, code };

const code = `
  FROM centos:latest
  RUN yum update -y
  RUN yum install httpd -y
  ENV contenido miNombreEsmary
  RUN echo "Esto es un mensaje $contenido" > /var/www/html/prueba.html
  ENTRYPOINT ["/usr/sbin/httpd","-D","FOREGROUND"]
`;

const code2 = `
FROM node:11.15.0

RUN mkdir -p /app/node_modules && chown -R node:node /app
WORKDIR /app
COPY package*.json ./
USER node
RUN npm install
COPY --chown=node:node . .
ENV REACT_ENV_EXAMPLE personas

EXPOSE 3001 
CMD [ "npm", "run" ,"dev" ]
`;

const code4 = `
FROM node:11.15.0

RUN mkdir -p /app/node_modules && chown -R node:node /app

WORKDIR /app

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

ENV REACT_ENV_EXAMPLE personas

EXPOSE 3000

CMD [ "npm", "run" ,"dev" ]
`;

export default [
  {
    name: "custom image centos",
    description: "Imagen custom de centos",
    notes: [
      "docker build --tag centos_test .",
      "docker images",
      "docker run  -d -p 8080:80 centos_test",
      "http://localhost:8080/prueba.html",
    ],
    folder: "docker/project1",
    code: [code],
  },
  {
    name: "custom image node",
    description: "Imagen custom de node and test with ENV",
    notes: [
      "manual *npm i* porque no tengo volumenes",
      "docker build --tag custom_node .",
      "docker images",
      "docker run -d -p 8080:3001 custom_node",
      "http://localhost:8080/hola",
    ],
    folder: "docker/project2",
    code: [code2],
  },
  {
    name: "automatic npm i",
    description: "automatic npm i  y uso de .env",
    notes: [],
    folder: "docker/project4",
    code: [code4],
  },
];

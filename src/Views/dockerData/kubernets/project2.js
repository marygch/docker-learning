const project2 = {
  apiVersion: "v1",
  kind: "Pod",
  metadata: {
    name: "podbackend",
    labels: {
      app: "testing",
      purpose: "demonstrate-create-nucleus",
    },
  },
  spec: {
    containers: [
      {
        name: "containermysql",
        image: "mysql:5.7",
        env: [
          {
            name: "MYSQL_DATABASE",
            value: "api_febrero",
          },
          {
            name: "MYSQL_ROOT_PASSWORD",
            value: "password",
          },
          {
            name: "MYSQL_PASSWORD",
            value: "mac1234",
          },
        ],
        ports: [
          {
            containerPort: 3306,
          },
        ],
      },
      {
        name: "containernucleus",
        image: "node:11.15.0",
        command: [
          "sh",
          "-c",
          "npm install && npm install nodemon && sleep 3600",
        ],
        env: [
          {
            name: "MY_ENV_KEY",
            value: "Esto es una variable de entorno para nucleus api",
          },
        ],
        ports: [
          {
            containerPort: 3000,
            name: "nucleusport",
          },
        ],
      },
    ],
  },
};

export default project2;

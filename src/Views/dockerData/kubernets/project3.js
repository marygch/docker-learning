const project3 = {
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
            value: "db_kubernetizada",
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
          {
            name: "MYSQL_HOST",
            value: "db",
          },
          {
            name: "MYSQL_DB_NAME",
            value: "db_kubernetizada",
          },
          {
            name: "MYSQL_USER",
            value: "root",
          },
          {
            name: "MYSQL_PASSWORD",
            value: "mac1234",
          },
          {
            name: "MYSQL_ROOT_PASSWORD",
            value: "mac1234",
          },
          {
            name: "NODE_ENV",
            value: "development",
          },
          {
            name: "MY_POD_IP",
            valueFrom: {
              fieldRef: {
                fieldPath: "status.podIP",
              },
            },
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

export default [project3];

const project1 = {
  apiVersion: "v1",
  kind: "Pod",
  metadata: {
    name: "podmysql",
    labels: {
      app: "podmysql",
      purpose: "demonstrate-create-pod",
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
    ],
  },
};

export default [project1];

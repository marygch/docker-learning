import project1 from "./project1";
import project2 from "./project2";
import project3 from "./project3";

const miFirsExample = [
  {
    apiVersion: "v1",
    kind: "Service",
    metadata: {
      name: "mysql",
    },
    spec: {
      ports: [
        {
          port: 3306,
        },
      ],
      selector: {
        app: "mysql",
      },
      clusterIP: "None",
    },
  },
  {
    apiVersion: "apps/v1",
    kind: "Deployment",
    metadata: {
      name: "mysql",
    },
    spec: {
      selector: {
        matchLabels: {
          app: "mysql",
        },
      },
      strategy: {
        type: "Recreate",
      },
      template: {
        metadata: {
          labels: {
            app: "mysql",
          },
        },
        spec: {
          containers: [
            {
              image: "mysql:5.7",
              name: "mysqlpod",
              env: [
                {
                  name: "MYSQL_DATABASE",
                  value: "api_febrero",
                },
                {
                  name: "MYSQL_PASSWORD",
                  value: "mac1234",
                },
                {
                  name: "MYSQL_ROOT_PASSWORD",
                  value: "mac1234",
                },
              ],
              ports: [
                {
                  containerPort: 3306,
                  name: "mysql",
                },
              ],
            },
          ],
        },
      },
    },
  },
];

export default [
  {
    name: "POD-mysql",
    description: "POD utilizando la imagen de mysql",
    notes: [
      "Para un POD con mysql no es necesario crear el usuario root, este ya esta definido por default",
    ],
    folder: "kubernets/project1",
    data: project1,
  },
  {
    name: "deployement",
    description: "Deployment example for  general review",
    folder: "na",
    data: miFirsExample,
  },
  {
    name: "POD-mysql-node",
    description: "POD utilizando dos contendores: la imagen de mysql y node",
    notes: ["Mapear informacion del POD a variables de entorno"],
    folder: "kubernets/project2",
    data: project2,
  },
  {
    name: "POD-mysql-node-3",
    description: "POD ejemplificando variables de ambiente y conecciones",
    notes: ["Mapear informacion del POD a variables de entorno"],
    folder: "kubernets/project2",
    data: project3,
  },
];

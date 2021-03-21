import { data as dataProyect1, code as codeProyect1 } from "./project1";
import { data as dataProyect2, code as codeProyect2 } from "./project2";
import { data as dataProyect3, code as codeProyect3 } from "./project3";

export default [
  {
    name: "node custom image",
    description: `Imagen custom de node y docker-compose, 
    # Dockerfile
    # una imagen custom para hacer por separado el npm i
    # es decir una capa con esto, y cuando se levanta ya es muy rapido`,
    notes: ["docker-compose build .", "docker-compose up"],
    code: codeProyect1,
    data: dataProyect1,
  },
  {
    name: "node with volumnes",
    description: `Imagen custom de node y docker-compose utilizando volume, 
      no sirve para ver como manipulamos info con y sin volumenes`,
    notes: ["docker-compose up --build"],
    code: codeProyect2,
    data: dataProyect2,
  },
  {
    name: "node y mysql",
    description: `Un ejemplo de un backend que incluye una api con node y una bd mysql. 
    Se utiliza sequalize para extraer datos de DB`,
    notes: ["docker-compose up --build"],
    code: codeProyect3,
    data: dataProyect3,
    codeColors: ["code", false],
  },
];

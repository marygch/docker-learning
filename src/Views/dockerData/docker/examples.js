const YAML = require("json-to-pretty-yaml");

const miFirsExample = {
  FROM: "X",
  TO: "Y",
};

const frontExample = {
  name: "Example 1",
  data: miFirsExample,
};

const frontExample2 = {
  name: "Example 2",
  data: miFirsExample,
};

export default {
  frontExample,
  frontExample2,
};

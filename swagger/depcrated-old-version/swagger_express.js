// import swaggerDocument from "../docs/doc.json" assert { type: "json" };
import { Router } from "express";
import fs from "node:fs";
import swaggerUi from "swagger-ui-express";
import YAML from "yaml";
import path from "node:path";

/**
 *
 * @deprecated
 * This configuration was deprecated, replaced by swagger docs
 * Use ./swagger_jsDocs.js for config swagger
 *
 * */
const api = Router();

const fileJson = fs.readFileSync(path.join(".", "docs", "doc.json"), "utf8");
const jsonDoc = JSON.parse(fileJson);

const fileYaml = fs.readFileSync(path.join(".", "docs", "doc.yaml"), "utf8");
const yamlDoc = YAML.parse(fileYaml);

console.log(jsonDoc);
console.log(yamlDoc);

var options = {
  explorer: true,
  // swaggerOptions: {
  //   url: 'http://petstore.swagger.io/v2/swagger.json'
  // }
  // You can to add a url for ger a swagger json from other place
};

api.use("/docs", swaggerUi.serve);
api.get("/docs", swaggerUi.setup(yamlDoc | jsonDoc, options));

export default api;

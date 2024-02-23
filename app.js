import express from "express";
import path from "path";
import apiAuth from "./src/routes/auth.js";
import options from "./swagger/swagger_jsDocs.js";
import swaggerUi from "swagger-ui-express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json({ limit: "1000kb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "1000kb" }));
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(options, {
    withCredentials: true,
    displayRequestDuration: true,
  })
);
app.use(express.static(path.join(".", "public")));
app.use("/auth", apiAuth);

export default app;

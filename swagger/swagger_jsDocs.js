import swaggerJSDoc from "swagger-jsdoc";

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Swagger Example api docs",
      version: "1.0.0",
      description: "Example Swagger UI Express Integration",
    },
    components: {
      securitySchemes: {
        api_key: { type: "apiKey", in: "header", name: "Authorization" },
      },
    },
    basePath: "/",
    docExpansion: "none",
    servers: [
      {
        url: "http://localhost:3000",
        description: "Servidor local",
      },
    ],
  },
  apis: ["./src/routes/*.js" /** "./docs/*.yaml"*/],
};

export default swaggerJSDoc(options);

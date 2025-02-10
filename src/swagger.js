const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Zoom Request API",
      version: "1.0.0",
      description: "API documentation for managing Zoom requests",
    },
    servers: [{ url: "http://localhost3000" }],
  },
  apis: ["./src/routes/*.js"], // Point to route files
};

const swaggerSpec = swaggerJsDoc(options);

const setupSwagger = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = setupSwagger;

const route = require("express").Router();
const controllerCharacters = require("../controllers/rickAndMorty.controller");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../../swagger.json");

const {
  validId,
  validObjectBody,
} = require("../middlewares/rickAndMorty.middleware");

route.use("/api-docs", swaggerUi.serve);
route.get("/api-docs", swaggerUi.setup(swaggerDocument));

route.get("/all-characters", controllerCharacters.findAllCharactersController);
route.get(
  "/one-character/:id",
  validId,
  controllerCharacters.findByIdCharacterController
);
route.post(
  "/create-character",
  validObjectBody,
  controllerCharacters.createCharacterController
);
route.put(
  "/update-character/:id",
  validId,
  validObjectBody,
  controllerCharacters.updateCharacterController
);
route.delete(
  "/delete-character/:id",
  validId,
  controllerCharacters.deleteCharacterController
);
module.exports = route;

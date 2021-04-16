// const controllers = require("../controllers");

const { createImmo, getAll, getByID } = require("../controllers");

const createRoutes = (app) => {
  // creation des routes
  app.get("/", getAll);

  app.get("/:id", getByID);

  // Pareil => app.post("/", (req, res, next) => createImmo(req, res, next));
  app.post("/", createImmo);
};

module.exports = createRoutes;

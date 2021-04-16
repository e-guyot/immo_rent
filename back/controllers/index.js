const Immo = require("../models");

const createImmo = (request, response, next) => {
  const body = request.body;

  Immo.create(body)
    .then((immo) => {
      response.send(immo);
    })
    .catch(next);
};

const getAll = (request, response, next) => {
  Immo.find()
    .then((immos) => response.send(immos))
    .catch(next);
};

const getByID = (request, response, next) => {
  const id = request.params.id;

  Immo.findById(id)
    .then((immo) => {
      response.send(immo);
    })
    .catch(next);
};

module.exports = {
  createImmo,
  getAll,
  getByID,
};

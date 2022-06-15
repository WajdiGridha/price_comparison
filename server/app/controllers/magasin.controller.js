const db = require("../models");
const Magasin = db.magasins;

// Create and Save a new Magasin
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Magasin
  const magasin = new Magasin({
    name: req.body.name,
    url: req.body.url,
    logo: req.body.logo,
  });

  // Save Magasin in the database
  magasin
    .save(magasin)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Magasin.",
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name
    ? { name: { $regex: new RegExp(name), $options: "i" } }
    : {};

  Magasin.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products.",
      });
    });
};

// Find a single Magasin with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Magasin.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found Magasin with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving Magasin with id=" + id });
    });
};

// Update a Magasin by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;

  Magasin.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Magasin with id=${id}. Maybe Magasin was not found!`,
        });
      } else res.send({ message: "Magasin was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Magasin with id=" + id,
      });
    });
};

// Delete a Magasin with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Magasin.findByIdAndRemove(id, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Magasin with id=${id}. Maybe Magasin was not found!`,
        });
      } else {
        res.send({
          message: "Magasin was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Magasin with id=" + id,
      });
    });
};


exports.count = async (req, res) => {
    const result = await Magasin.find().countDocuments();
    res.json(result, 200);
  };



module.exports = (app) => {
    const magasins = require("../controllers/magasin.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", magasins.create);
  
    // how many magasins
    router.get('/count', magasins.count);

    router.get('/', magasins.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", magasins.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", magasins.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", magasins.delete);
  
    app.use("/api/magasins", router);
  };
  
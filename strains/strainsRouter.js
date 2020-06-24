const router = require('express').Router();

const Strains = require('./strainsModel.js');

// =========== GET Strains ===========
router.get('/', (req, res) => {
    console.log("token for STRAINS", req.decodedToken);
    Strains.find()
      .then(strains => {
        res.json(strains);
      })
      .catch(err => res.send(err));
  });
  
  // =========== GET Strain by id ===========
  router.get('/:id', (req, res) => {
    Strains.findById(req.params.id)
    .then(resource => {
      if(resource) {
        res.status(200).json(resource)
      } else {
        res.status(404).json({message: "strain not found"})
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "ERROR unable to find strain", errorMessage: error.detail });
    });
  })
  
  module.exports = router;
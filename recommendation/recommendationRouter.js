const router = require('express').Router();

const Recommendations = require('./recommendationModel');
const axios = require("axios")

// =========== GET Recommendations ===========
router.get('/', (req, res) => {
    console.log("token for RECOMMENDATION", req.decodedToken);
    Recommendations.find()
      .then(recommendation => {
        res.json(recommendation);
      })
      .catch(err => res.send(err));
  });
  
  // =========== GET Recommendation by id ===========
  router.get('/:id', (req, res) => {
    Recommendations.findById(req.params.id)
    .then(resource => {
      if(resource) {
        res.status(200).json(resource)
      } else {
        res.status(404).json({message: "recommendation id not found"})
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "ERROR unable to find recommendation", errorMessage: error.detail });
    });
  })


// =========== POST Recommendation ===========
router.post('/', (req, res) => {
  let rec = req.body;

  Recommendations.add(rec)
    .then(response => {
      res.status(201).json({ message: `new responses added, thank you`, rec });
    })
    .catch(err => {
      res.status(500).json({ message: "ERROR unable to add response", err });
    })
});

  
  module.exports = router;

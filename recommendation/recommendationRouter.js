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
  router.post("/", (req, res) => {
    Recommendations.add(req.body)
        .then((newUserStrain) => {
            response.status(200).json({ ...newUserStrain })
        })
        .catch((error) => {
            response.status(500).json({ message: error })
        })
})

// =========== POST Recommendation ===========
router.post('/search', (req, res) => {
    axios.post("https://medcab-td.herokuapp.com/predictions",
        {
            ...req.body
        }
    )
        .then((dataResponse) => {
            console.log(dataResponse.data);
            res.status(200).json({ ...dataResponse.data });
        })
        .catch((error) => {
            response.status(500).json({ message: error })
        })
});

  
  module.exports = router;
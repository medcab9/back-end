const router = require('express').Router();

const Users = require('./usersModel.js');

// =========== GET Users ===========
router.get('/', (req, res) => {
  // console.log("token", req.decodedToken);
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

// =========== GET User by id ===========
router.get('/:id', (req, res) => {
  Users.findById(req.params.id)
  .then(resource => {
    if(resource) {
      res.status(200).json(resource)
    } else {
      res.status(404).json({message: "user not found"})
    }
  })
  .catch((err) => {
    res.status(500).json({ message: "ERROR unable to find user", err });
  });
})

// =========== DELETE User ===========
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  Users.remove(id)
  .then(deleted => {
    if(deleted){
      res.status(200).json({removed: `user ${id} 😥`})
    } else {
      res.status(404).json({message: "user not found"})
    }
  })
  .catch((err) => {
    res.status(500).json({ message: "ERROR unable to find user", err });
  });
})

module.exports = router;
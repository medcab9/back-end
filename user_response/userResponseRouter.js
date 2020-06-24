const router = require('express').Router();

const Responses = require('./userResponseModel');

// =========== GET User_Responses ===========
router.get('/', (req, res) => {
    console.log("token for RESPONSES", req.decodedToken);
    Responses.find()
        .then(responses => {
            res.json(responses);
        })
        .catch(err => res.send(err));
});

// =========== GET User_Response by id ===========
router.get('/:id', (req, res) => {
    Responses.findById(req.params.id)
        .then(resource => {
            if (resource) {
                res.status(200).json(resource)
            } else {
                res.status(404).json({ message: "response not found" })
            }
        })
        .catch((err) => {
            res.status(500).json({ message: "ERROR unable to find response", errorMessage: error.detail });
        });
})

// =========== POST User_Response ===========
router.post('/', (req, res) => {
    let desiredEffect = req.body;;

    Responses.add(desiredEffect)
        .then(response => {
            res.status(201).json({ message: `new responses added, thank you`, desiredEffect});
        })
        .catch(err => {
            res.status(500).json({ message: "ERROR unable to add response", err });
        })
});

// =========== DELETE Response ===========
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Responses.remove(id)
        .then(deleted => {
            if (deleted) {
                res.status(200).json({ removed: `response ${id} 😥` })
            } else {
                res.status(404).json({ message: "response not found" })
            }
        })
        .catch((err) => {
            res.status(500).json({ message: "ERROR unable to find response", err });
        });
})

module.exports = router;
const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../users/usersModel.js');
const secrets = require('../api/secrets.js');

// =========== POST User ===========
router.post('/register', (req, res) => {
    let user = req.body;

    const rounds = process.env.HASH_ROUNDS || 10;

    const hash = bcrypt.hashSync(user.password, rounds);

    user.password = hash;

    Users.add(user)
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ errorMessage: error.detail });
        });
});

// =========== GET User by username ===========
router.post('/login', (req, res) => {
    let { username, password } = req.body;

    Users.findBy({ username })
        .then(([user]) => {

            if (user && bcrypt.compareSync(password, user.password)) {

                const token = generateToken(user);

                res.status(200).json({ message: 'Welcome!', token });
            } else {
                res.status(401).json({ message: 'You shall not pass!' });
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ errorMessage: error.message });
        });
});

// =========== Generate JSON Web Token ===========
function generateToken(user) {

    const payload = {
        user_id: user.id,
        username: user.username,
    };
    const secret = secrets.jwtSecret;
    const options = {
        expiresIn: '4d',
    };

    return jwt.sign(payload, secret, options);
}


module.exports = router;

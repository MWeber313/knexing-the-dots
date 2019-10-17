const router = require('express').Router();

const bcrypt = require('bcryptjs');

const Tls = require('../tls/tls-model.js')

const tokenMan = require('../../middleware/generateToken');

router.post('/register', (req, res) => {
    let user = req.body;
    if (!user.username) {
        res.status(422).json({message: "Missing fields: username"})
    }
    else if (!user.password) {
        res.status(422).json({message: "Missing fields: password"})
    }
    else if (!user.name) {
        res.status(422).json({message: "Missing fields: name"})
    } else {
        const hash = bcrypt.hashSync(user.password, 10);
        user.password = hash
        Tls.add(user)
        .then(user => {
            res.status(201).json(user)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
    }
})

router.post('/login', (req, res) => {
    let {username, password} = req.body;
    Tls.getBy({username})
    .first()
    .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = tokenMan.generateToken(user)
            res.status(200).json({
                message: `Welcome ${user.name}!`,
                token
            })
        } else {
            res.status(403).json({message: "Bad credentials!"})
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

module.exports = router;
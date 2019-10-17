const router = require('express').Router();

const Tls = require('../tls/tls-model.js')

router.get('/', (req, res) => {
    Tls.get()
    .then(users => {
        res.status(200).json(users)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})


module.exports = router;
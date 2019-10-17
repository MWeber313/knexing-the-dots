const router = require('express').Router();

const Students = require('./students-model')

router.get('/:id', (req, res) => {
    const id = req.params.id
    Students.getById(id)
    .then(student => {
        res.status(200).json(student)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

module.exports = router;
const router = require('express').Router();

const Projects = require('./projects-model')

router.get('/:id', (req, res) => {
    const id = req.params.id
    Projects.getById(id)
    .then(project => {
        res.status(200).json(project)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

module.exports = router;
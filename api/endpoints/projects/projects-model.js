const db = require('../../../data/dbConfig');

module.exports = {
    get,
    getById,
    add,
}

function get() {
    return db('projects')
}

function getById(id) {
    return db('projects')
    .join('tls', `tls.id`, 'projects.assigned_to_tl' )
    .where('projects.assigned_to_tl', id)
    .select('projects.*', 'tls.name')
}

function add(user) {
    return db('projects')
    .insert(user)
    .then(ids => {
        console.log("Id in braces, poor thing", [id])
        console.log("Id in brackets, I probably messed up the naming", {id})
        const [id] = ids;
        return db('projects')
        .where({id})
        .first();
    })
}
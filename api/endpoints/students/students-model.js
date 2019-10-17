const db = require('../../../data/dbConfig');

module.exports = {
    get,
    getById,
    add,
}

function get() {
    return db('students')
}

function getById(id) {
    return db('students')
    .join('tls', 'tls.id', 'students.assigned_to_tl' )
    .where('students.assigned_to_tl', id)
    .select('students.*', 'tls.name as tl_name')
}

function add(user) {
    return db('students')
    .insert(user)
    .then(ids => {
        console.log("Id in braces, poor thing", [id])
        console.log("Id in brackets, I probably messed up the naming", {id})
        const [id] = ids;
        return db('students')
        .where({id})
        .first();
    })
}
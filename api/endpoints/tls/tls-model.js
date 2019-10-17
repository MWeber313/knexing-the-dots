const db = require('../../../data/dbConfig');

module.exports = {
    get,
    getBy,
    add,
}

function get() {
    return db('tls')
}

function getBy(filter) {
    return db('tls')
    .where(filter)
}

function add(user) {
    return db('tls')
    .insert(user)
    .then(ids => {
        const [id] = ids;
        console.log("Id in braces, poor thing", [id])
        console.log("Id in brackets, I probably messed up the naming", {id})
        return db('tls')
        .where({id})
        .first();
    })
}
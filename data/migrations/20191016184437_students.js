
exports.up = function(knex) {
    return knex.schema.createTable('students', tbl => {
        tbl.increments()
        tbl.string('student_name', 128).notNullable()
        tbl.integer('assigned_to_tl').notNullable()
        .references('id')
        .inTable('tls')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('students')
  };
  
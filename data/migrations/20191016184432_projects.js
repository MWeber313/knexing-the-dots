
exports.up = function(knex) {
    return knex.schema.createTable('projects', tbl => {
        tbl.increments()
        tbl.string('project_name', 128).notNullable()
        tbl.boolean('completed').defaultTo(false)
        tbl.integer('assigned_to_tl').notNullable()
        .references('id')
        .inTable('tls')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('projects')
  };
  
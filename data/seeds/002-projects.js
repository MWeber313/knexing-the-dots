
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_name: "Eatin bones", completed: false, assigned_to_tl: 1 },
        {project_name: "Brew coffee accidentally", completed: true, assigned_to_tl: 2},
        {project_name: "Save Lambda", completed: false, assigned_to_tl: 3},
        {project_name: "Diggin holes", completed: true, assigned_to_tl: 1},
        {project_name: "Wash cup with mint leaves", completed: false, assigned_to_tl: 2},
        {project_name: "Complain about whatever's stupid this week", completed: true, assigned_to_tl: 3},
      ]);
    });
};

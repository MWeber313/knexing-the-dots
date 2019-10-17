
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {student_name: 'Sydney', assigned_to_tl: 1},
        {student_name: 'JB', assigned_to_tl: 1},
        {student_name: 'Josh', assigned_to_tl: 1},
        {student_name: 'Chris', assigned_to_tl: 2},
        {student_name: 'Emma', assigned_to_tl: 2},
        {student_name: 'Matthew', assigned_to_tl: 2},
        {student_name: 'Kate', assigned_to_tl: 3},
        {student_name: 'Mikey', assigned_to_tl: 3},
        {student_name: 'Tyler', assigned_to_tl: 3},
      ]);
    });
};

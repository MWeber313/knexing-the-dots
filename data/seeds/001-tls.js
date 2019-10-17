
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tls').del()
    .then(function () {
      // Inserts seed entries
      return knex('tls').insert([
        {username: "SydsDog2019", password: "pass", name: "Ghost" },
        {username: "MacksTea2031", password: "pass", name: "Tea Is Just Okay" },
        {username: "OshKoshBiJosh", password: "pass", name: "Joshy Boi"}
      ]);
    });
};

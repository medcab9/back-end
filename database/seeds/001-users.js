
exports.seed = function(knex) {
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 100, username: 'CannabisKook', password: 'animal', email: 'hellokitty7757@gmail.com'},
        {id: 200, username: 'wiseoldman', password: 'pickle', email: 'CaliChris@yahoo.com'},
        {id: 300, username: 'Free_Byrd', password: 'tree', email: 'NateDiesel@yahoo.com'},
        {id: 400, username: 'SexMetalBarbie420', password: 'frisbee', email: 'bigray122@hotmail.com'},
        {id: 500, username: 'medicinalmelodies', password: 'korn', email: 'surfzen88@gmail.com'},
        {id: 600, username: 'kimdavis3', password: 'monkey', email: 'Telizabeth713@HighGradeHealth.com'},
        {id: 700, username: 'vet', password: 'peacock', email: 'G420man@gmail.com'},
        {id: 800, username: 'BenchAdventures', password: 'pinon', email: 'Gree_house_420@gmail.com'},
        {id: 900, username: 'PeaceSeeker', password: 'light', email: 'Leafthug400@LambdaSchool.com'},
        {id: 1000, username: 'paintergirl', password: 'guitar', email: 'liftedjoker@gmail.com'},
        {id: 1100, username: 'Chill_Panda', password: 'dolphin', email: 'ckoko1369@hotmail.com'},
        {id: 1200, username: 'Binkyfarms', password: '56463', email: 'bigray122@yahoo.com'},
      ]);
    });
};

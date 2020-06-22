
exports.seed = function(knex) {
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'CannabisKook', password: 'animal', email: 'hellokitty7757@gmail.com' },
        { username: 'wiseoldman', password: 'pickle', email: 'CaliChris@yahoo.com' },
        { username: 'Free_Byrd', password: 'tree', email: 'NateDiesel@yahoo.com' },
        { username: 'SexMetalBarbie420', password: 'frisbee', email: 'bigray122@hotmail.com' },
        { username: 'medicinalmelodies', password: 'korn', email: 'surfzen88@gmail.com' },
        { username: 'kimdavis3', password: 'monkey', email: 'Telizabeth713@HighGradeHealth.com' },
        { username: 'vet', password: 'peacock', email: 'G420man@gmail.com' },
        { username: 'BenchAdventures', password: 'pinon', email: 'Gree_house_420@gmail.com' },
        { username: 'PeaceSeeker', password: 'light', email: 'Leafthug400@LambdaSchool.com' },
        { username: 'paintergirl', password: 'guitar', email: 'liftedjoker@gmail.com' },
        { username: 'Chill_Panda', password: 'dolphin', email: 'ckoko1369@hotmail.com' },
        { username: 'Binkyfarms', password: '56463', email: 'bigray122@yahoo.com' },
      ]);
    });
};

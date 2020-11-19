'use strict';

module.exports = {
  up: async (queryInterface) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('hikers', [
      { username: 'JohnBoy Walton', phone: '0123456789', dob: '1916-01-01'},
      { username: 'George Jones', phone: '9876543210', dob: '1931-09-12'},
      { username: 'Emily Nenni', phone: '1233211234', dob: '1990-01-01'},
      { username: 'Cody Jinks', phone: '3211234321', dob: '1980-08-18'},
      { username: 'Charley Pride', phone: '121212121', dob: '1934-03-18'},
      { username: 'Sturgill Simpson', phone: '180047227', dob: '1978-06-08'},
      { username: 'Bob Wills', phone: '111111111', dob: '1905-03-06'},
      { username: 'Tyler Childers', phone: '222222222', dob: '1991-06-21'},
      { username: 'Keith Whitley', phone: '333333333', dob: '1955-07-01'},
      { username: 'Terri Clark', phone: '444444444', dob: '1968-08-05'},
    ], {})

    await queryInterface.bulkInsert('trails', [
      {trail_name: 'Humpback Rock', 
      difficulty: 'Beginner', 
      description: 'great view at the top, great memories!', 
      address: 'loc1',
      lat_: '1',
      long_: '1',},

      {trail_name: 'Old Rag Mountain', 
      difficulty: 'Intermediate', 
      description: 'took all day', 
      address: 'loc2',
      lat_: '2',
      long_: '2',},
    ], {})
  },

  down: async (queryInterface) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('hikers', null, {})
    await queryInterface.bulkDelete('trails', null, {})
  },
};

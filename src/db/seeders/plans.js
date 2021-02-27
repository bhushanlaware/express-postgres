module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Plans', [
      {
        planId: 'TRIAL',
        validDays: 10,
        amount: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        planId: 'STARTER_2M',
        validDays: 60,
        amount: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        planId: 'PRO_1M',
        validDays: 30,
        amount: 500,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        planId: 'PLUS_1M',
        validDays: 1000,
        amount: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Plans', null, {});
  }
};
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Plans', [
      {
        planId: 'FREE',
        validDays: 999999999,
        amount: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        planId: 'TRIAL',
        validDays: 7,
        amount: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        planId: 'LITE_1M',
        validDays: 30,
        amount: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        planId: 'PRO_1M',
        validDays: 30,
        amount: 200,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        planId: 'LITE_6M',
        validDays: 180,
        amount: 500,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        planId: 'PRO_6M',
        validDays: 180,
        amount: 900,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Plans', null, {});
  }
};
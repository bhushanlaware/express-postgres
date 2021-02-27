'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subscription extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Plan, {
        as: 'plan',
        foreignKey: 'planId',
      });
    }
  };
  Subscription.init({
    username: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    validTill: DataTypes.DATE,
    planId: DataTypes.STRING,
    startDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Subscription',
  });
  return Subscription;
};
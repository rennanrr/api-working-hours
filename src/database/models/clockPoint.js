'use strict';

const { default: User } = require("../../api/models/user");

module.exports = (sequelize, DataTypes) => {
  const ClockPoint = sequelize.define('clockPoint', {
    id: DataTypes.INTEGER,
    id_user : DataTypes.INTEGER,
    arrive : DataTypes.DATE,
    exit : DataTypes.DATE,
    lunch_exit : DataTypes.DATE,
    lunch_arrive : DataTypes.DATE,
    createdAt : DataTypes.DATE,
    updatedAt : DataTypes.DATE    
  }, {});
  exercise.associate = function(models) {
    ClockPoint.belongsTo(User, { foreignKey: 'id', sourceKey: 'id_user', targetKey: 'id' });
    User.hasMany(ClockPoint, { foreignKey: 'id', sourceKey: 'id_user', targetKey: 'id' });
  };
  return ClockPoint;
};
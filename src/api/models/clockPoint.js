import db from '../../config/db_connection';
import Sequelize from 'sequelize';

const ClockPoint = db.define('clockPoint', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  id_user: {
    allowNull: false,
    type: Sequelize.INTEGER,
    references: {
      model: 'users',
      key: 'id'
    }
  },
  arrive:{
    allowNull: false,
    type: Sequelize.DATE
  },
  exit:{
    allowNull: false,
    type: Sequelize.DATE
  },
  lunch_exit:{
    allowNull: false,
    type: Sequelize.DATE
  },
  lunch_arrive:{
    allowNull: false,
    type: Sequelize.DATE
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  }
});

export default ClockPoint;

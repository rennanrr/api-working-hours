import config from '../database/database';
import Sequelize from 'sequelize';

const db = new Sequelize(config[process.env.NODE_ENV || 'dev']);

export default db;
const sequelize = require('../db');
const { DataTypes } = require('sequilize');

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  password: {},
  role: {},
});

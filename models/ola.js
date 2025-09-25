const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const ola = sequelize.define('ola', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false
  },
  edad: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  salario: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  fecha_ingreso: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  tableName: 'ola', // nombre exacto de tu tabla
  timestamps: false
});

module.exports = ola;

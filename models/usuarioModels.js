const { DataTypes, INTEGER } = require('sequelize');
const sequelize = require('../db');

const Usuario = sequelize.define('Usuario', {

    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
    },
    usuario:{
        type: DataTypes.TEXT,
        allowNull:false,
    },

    password:{
        type: DataTypes.TEXT,
        allowNull:false
    },
 }, {
    tableName: 'Usuario',
    schema: 'public',
    timestamps: false,
    freezeTableName: true 

    })
    module.exports = Usuario
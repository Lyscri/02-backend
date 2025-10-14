const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Empleado = sequelize.define('Empleado', {
    // 💥 CORRECCIÓN: Cambia 'nombre' a 'Nombre' para coincidir con la BD.
    Nombre: {
        type: DataTypes.STRING(150), 
        allowNull: false,
    },
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, 
    },
    cargo: {
        type: DataTypes.STRING(100),
        allowNull: true,
    }
}, {
    tableName: 'Empleado', 
    schema: 'public',
    timestamps: false,
    freezeTableName: true 
});

module.exports = Empleado;
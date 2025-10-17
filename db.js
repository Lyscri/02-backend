// sequelize.js
const { Sequelize } = require('sequelize');
require('dotenv').config();

// Verifica que la variable de entorno esté definida
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL no está definida en el entorno. Asegúrate de que tu archivo .env esté cargado.");
}

const sequelize = new Sequelize(
  // Sequelize acepta la cadena de conexión completa (DATABASE_URL) como primer argumento
  process.env.DATABASE_URL, 
  {
    // Opciones adicionales
    dialect: 'postgres',
    logging: false,
    
    // **IMPORTANTE:** Solo si usas la URL pública (Opción B) y da error de SSL, 
    // podrías necesitar estas líneas:
    // dialectOptions: {
    //   ssl: {
    //     require: true,
    //     rejectUnauthorized: false
    //   }
    // }
  }
);

module.exports = sequelize;
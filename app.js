const express = require('express');
const sequelize = require('./db');
const Ola = require('./models/ola');

const app = express();
app.use(express.json());

// Conexión a PostgreSQL
sequelize.authenticate()
  .then(() => console.log("¡Conectado a PostgreSQL!"))
  .catch(err => console.error("Error de conexión:", err));

// Ruta GET para todos los registros
app.get('/ola', async (req, res) => {
  try {
    const registros = await Ola.findAll();
    res.json(registros);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los registros' });
  }
});

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

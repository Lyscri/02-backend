// app.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./db');
const Usuario = require('./models/usuarioModels');

const app = express();
app.use(express.json());
app.use(cors());

// Conexión a la base de datos
sequelize.authenticate()
  .then(() => console.log("✅ ¡Conectado a PostgreSQL!"))
  .catch(err => console.error("❌ Error de conexión:", err));

sequelize.sync()
  .then(() => console.log("✅ Modelos sincronizados: ¡Tablas creadas/verificadas!"))
  .catch(err => console.error("❌ Error al sincronizar modelos:", err));

// Rutas
app.get('/', async (req, res) => {
  console.log("conectado correctamente");
  res.send("Servidor Express.js en funcionamiento");
});

app.get('/Usuario', async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    res.status(500).json({ error: "Error al consultar la base de datos" });
  }
});

app.post('/Usuario', async (req, res) => {
  try {
    const { usuario, password } = req.body;
    if (!usuario || !password) {
      return res.status(400).json({ error: "Faltan campos obligatorios: 'usuario' y 'password'" });
    }
    const nuevoUsuario = await Usuario.create({ usuario, password });
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    console.error("Error al crear el usuario:", error);
    res.status(500).json({ error: "Error al intentar registrar el usuario en la base de datos." });
  }
});

// 👇 Exportamos la app para que SuperTest la use sin arrancar el servidor real
module.exports = app;

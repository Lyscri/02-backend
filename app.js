const express = require('express');
const sequelize = require('./db');
const Usuario = require('./models/usuarioModels');
require('dotenv').config();

const app = express();
app.use(express.json());

sequelize.authenticate()
  .then(() => console.log("✅ ¡Conectado a PostgreSQL!"))
  .catch(err => console.error("❌ Error de conexión:", err.message));

app.get('/', async (req, res) => {
 console.log("Servidor Express conectado correctamente");
 res.send("🚀 Servidor Express.js en funcionamiento. Usa /empleados para ver los datos.");
});

app.get('/Usuario', async (req,res)=> {
  const Usuario = await Usuario.findAll();
  res.json(usuario)
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`📡 Servidor corriendo en http://localhost:${PORT}`);
});
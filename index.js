const express = require('express');
const cors = require('cors');
const sequelize = require('./db');
const Usuario = require('./models/usuarioModels');

require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors()); 
app.use(express.json());

sequelize.authenticate()
  .then(() => console.log("✅ ¡Conectado a PostgreSQL!"))
  .catch(err => console.error("❌ Error de conexión:", err));
  
  sequelize.sync() .then(() => console.log("✅ Modelos sincronizados: ¡Tablas creadas/verificadas!"))
  .catch(err => console.error("❌ Error al sincronizar modelos:", err));

app.get('/', async (req,res) => {
 console.log("conectado correctamente")
 res.send("Funcionaaaaaaaa")
})
app.get('/Usuario', async (req,res)=> {
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
        const nuevoUsuario = await Usuario.create({
            usuario: usuario,
            password: password 
        });
        res.status(201).json(nuevoUsuario);
    } catch (error) {
        console.error("Error al crear el usuario:", error);
        res.status(500).json({ error: "Error al intentar registrar el usuario en la base de datos." });
    }
});


// Este es mi puerto declarado
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});

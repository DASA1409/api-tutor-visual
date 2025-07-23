const express = require('express');
const cors = require('cors');
const sequelize = require('./db');

// Importar modelos (para relaciones)
require('./models/Usuario');
require('./models/Opinion');
require('./models/Recomendacion');

// Sincronizar la base de datos
sequelize.sync().then(() => {
  console.log('📦 Base de datos sincronizada');
});

const app = express();
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/usuario', require('./router/usuario'));
app.use('/api/opiniones', require('./router/opiniones'));
app.use('/api/recomendaciones', require('./router/recomendaciones'));

// Iniciar servidor
// En tu archivo principal (app.js o server.js)
const PORT = 3001; // ✅ Cambiar a 3001
app.listen(PORT, () => {
  console.log(`🚀 Servidor en http://localhost:${PORT}`);
});

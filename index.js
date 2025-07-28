const express = require('express');
const cors = require('cors');
const sequelize = require('./db');
 
// Importar modelos (para relaciones)
require('./models/Usuario');
require('./models/Opinion');
require('./models/Recomendacion');
 
const app = express();
app.use(cors());
app.use(express.json());
 
// Rutas
app.use('/api/usuario', require('./router/usuario'));
app.use('/api/opiniones', require('./router/opiniones'));
app.use('/api/recomendaciones', require('./router/recomendaciones'));
 
// Ruta de prueba para verificar que la API funciona
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'API funcionando correctamente',
    timestamp: new Date().toISOString()
  });
});
 
// Función para inicializar la aplicación
async function startServer() {
  try {
    // Probar conexión a la base de datos
    await sequelize.authenticate();
    console.log('✅ Conexión a la base de datos establecida');
    // Sincronizar modelos
    await sequelize.sync();
    console.log('📦 Base de datos sincronizada');
    // Iniciar servidor
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
      console.log(`🚀 Servidor ejecutándose en puerto ${PORT}`);
      console.log(`🌐 URL: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Error al iniciar el servidor:', error);
    process.exit(1);
  }
}
 
// Iniciar la aplicación
startServer();
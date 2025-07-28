require('dotenv').config();
const { Sequelize } = require('sequelize');
 
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306,
    dialect: process.env.DB_DIALECT,
    dialectOptions: {
      connectTimeout: 60000,
      acquireTimeout: 60000,
      timeout: 60000,
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    logging: console.log // Para ver las consultas SQL en desarrollo
  }
);
 
// Función para probar la conexión
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('✅ Conectado a MySQL exitosamente');
    return true;
  } catch (error) {
    console.error('❌ Error de conexión a la base de datos:', error.message);
    console.error('Detalles del error:', {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      database: process.env.DB_NAME,
      user: process.env.DB_USER
    });
    return false;
  }
}
 
// Ejecutar prueba de conexión
testConnection();
 
module.exports = sequelize;
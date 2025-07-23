// db.js
const { Sequelize } = require('sequelize');

// Cambia los datos a tu configuración local
const sequelize = new Sequelize('tutor_visual', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate()
  .then(() => console.log('✅ Conectado a MySQL'))
  .catch(err => console.error('❌ Error de conexión:', err));

module.exports = sequelize;

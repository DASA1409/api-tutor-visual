const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Usuario = require('./Usuario');

const Recomendacion = sequelize.define('Recomendacion', {
  contenido: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

Usuario.hasMany(Recomendacion, { foreignKey: 'usuario_id' });
Recomendacion.belongsTo(Usuario, { foreignKey: 'usuario_id' });

module.exports = Recomendacion;

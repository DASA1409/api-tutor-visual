const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Usuario = require('./Usuario');

const Opinion = sequelize.define('Opinion', {
  contenido: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  puntuacion: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

Usuario.hasMany(Opinion, { foreignKey: 'usuario_id' });
Opinion.belongsTo(Usuario, { foreignKey: 'usuario_id' });

module.exports = Opinion;

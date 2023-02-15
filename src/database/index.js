const Sequelize = require('sequelize')
const dbConfig = require('../config/database');
const Usuario = require('../models/Usuario');
const Produto = require('../models/Produto');

const sequelize = new Sequelize(dbConfig)

Produto.init(sequelize);
Usuario.init(sequelize);

module.exports = sequelize;
//acessa a bliblioteca sequelize
const Sequelize = require ("sequelize");

//configuar a conexão com banco de dados
const connection = new Sequelize('guiapresss', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: "-03:00"
})

//exportar essa configuração para o index
module.exports = connection;
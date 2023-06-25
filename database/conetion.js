const { Sequelize } = require('sequelize');

const db = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: '',
  database: 'dbmotors',
  port: 3306,
  logging: false,
});

db.authenticate()
  .then((res) => console.log('Autenticada'))
  .catch((err) => console.log(err));
db.sync()
  .then((res) => console.log('sincronozada'))
  .catch((err) => console.log(err));
module.exports = { db };

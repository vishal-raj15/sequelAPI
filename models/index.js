
const { Sequelize, DataTypes } = require("sequelize");
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.USER_NAME, process.env.USER_PASSWORD, {
    host:process.env.DB_HOST,
    dialect:'mysql'
})

sequelize.authenticate().then(() => {
    console.log( 'connetion done !!!!!!');
}).catch((err) => {
    console.log( " errror ", err);
})

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.authors = require('./authorModel.js')(sequelize, DataTypes);

module.exports = db;

const { Sequelize, DataTypes } = require("sequelize");
require('dotenv').config();

const sequelize = new Sequelize('sequelAPI_DB',process.env.USER_NAME, process.env.USER_PASSWORD, {
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
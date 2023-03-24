const { Sequelize } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("user", {

        id: {
            type: Sequelize.DataTypes.INTEGER,
            primaryKey:true,
            autoincrement: true,
        },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return User;
  };
const { Sequelize } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    const Author = sequelize.define("author", {

        id: {
            type: Sequelize.DataTypes.INTEGER,
            primaryKey:true,
            autoincrement: true,
        },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      book: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },

      totalpages: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return Author;
  };
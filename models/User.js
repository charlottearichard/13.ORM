const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our User model
// the user is an extention or will be created in the form of sequelize's model
// * Model class tells sequelize about the name of the table,
// * which collumns it has and its data types. found: https://sequelize.org/docs/v6/core-concepts/model-basics/

class User extends Model {}

// define table columns and configuration
User.init(
  {
    // COLUMN 1 define an id column
    id: {
      // use the special Sequelize DataTypes object provide what type of data it is
      type: DataTypes.INTEGER,
      // * this is the equivalent of SQL's `NOT NULL` option
      allowNull: false,
      // instruct that this is the Primary Key
      primaryKey: true,
      // turn on auto increment
      autoIncrement: true,
    },
    // COLUMN 2 define a username column
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // COLUMN 3 define an email column
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      // there cannot be any duplicate email values in this table
      unique: true,
      // because allowNull is set to false, we can run our data through validators before creating the table data
      validate: {
        isEmail: true,
      },
    },
    // COLUMN 4 define a password column
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        // this means the password must be at least four characters long
        len: [4],
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;

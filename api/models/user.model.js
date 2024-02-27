const {DataTypes} = require('sequelize');
const {connection} = require('../../database/db.index')

const User = connection.define(
 'user',
 {
 
   username: {
    type: DataTypes.STRING,
    allowNull: false,
   },
   email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
        isEmail: true
    }
   },
   password: {
    type: DataTypes.STRING,
    allowNull: false,
   },
   role: {
    type: DataTypes.ENUM('user','admin'),
    defaultValue: 'user'
   },
   age: {
    type: DataTypes.INTEGER,
    allowNull: false
   },
   sex: {
    type: DataTypes.STRING,
    allowNull: false
   },
   height: {
    type: DataTypes.INTEGER,
    allowNull: false,
   },
   weight: {
    type: DataTypes.INTEGER,
   allowNull: false
   },
   availability: {
    type: DataTypes.INTEGER,
    allowNull: true
   },
   goal: {
    type: DataTypes.STRING,
    allowNull: true
   },
   basal: {
    type: DataTypes.INTEGER,
    allowNull: true
   },
 },
 {
    timestamps: false
 }

 )

 module.exports = User 
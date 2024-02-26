const {DataTypes} = require('sequelize');
const {connection} = require('../../database/db.index')

const Training = connection.define (
    'training',
{ 
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  goal: {
    tyoe: DataTypes.STRING,
    allowNull: false
  },
  users_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true
  }, 
},
{
    timestamps: false,
}
);

module.exports = Training;


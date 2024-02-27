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
    type: DataTypes.STRING,
    allowNull: false
  }, 
},
{
    timestamps: false,
}
);

module.exports = Training;


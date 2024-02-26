const {DataTypes} = require('sequelize');
const {connection} = require('../../database/db.index')

const Routine = connection.define (
    'routine',
{
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  intensity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  }
},
{
    timestamps: false,
}
);

module.exports = Routine;

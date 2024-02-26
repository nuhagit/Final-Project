const { DataTypes } = require('sequelize');
const { connection } = require('../../database/db.index')

const Routine_training = connection.define(
    'routine_training',
    {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        basal: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
);

module.exports = routine_training
const { DataTypes } = require('sequelize');
const { connection } = require('../../database/db.index')

const Routine = connection.define(
    'routine',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        intensity: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    },
);

module.exports = Routine
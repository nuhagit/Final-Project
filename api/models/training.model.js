const { DataTypes } = require('sequelize');
const { connection } = require('../../database/db.index')

const Training = connection.define(
    'training',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        goal: {
            type: DataTypes.CHAR,
            allowNull: false
        }
    },
);

module.exports = Training
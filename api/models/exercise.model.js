const { DataTypes } = require('sequelize');
const { connection } = require('../../database/db.index')

const Exercise = connection.define(
    'exercise',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    
        series: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        repetitions: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    },
    { timestamps: false, }
);

module.exports = Exercise
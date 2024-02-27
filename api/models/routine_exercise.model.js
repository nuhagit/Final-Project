const { DataTypes } = require('sequelize');
const { connection } = require('../../database/db.index')

const Routine_Exercise = connection.define(
    'routine_exercise',
    // {
    //     routine_id: {
    //         type: DataTypes.INTEGER,
    //         allowNull: false
    //     },
    //     exercise_id: {
    //         type: DataTypes.INTEGER,
    //         allowNull: false
    //     },
    // },

    { timestamps: false, }
);

module.exports = Routine_Exercise
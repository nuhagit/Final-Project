const { DataTypes } = require('sequelize');
const { connection } = require('../../database/db.index')

const Training_Routine = connection.define(
    'training_routine',
    // {
    //     trainingId: {
    //         type: DataTypes.INTEGER,
    //         allowNull: false
    //     },
    //     routineId: {
    //         type: DataTypes.INTEGER,
    //         allowNull: false
    //     },
    // },

    { timestamps: false, }
);

module.exports = Training_Routine
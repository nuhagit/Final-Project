const { DataTypes } = require('sequelize');
const { connection } = require('../../database/db.index')

const RoutineExercise = connection.define(
    'routine_exercise',
    {  },

    { timestamps: false, }
);

module.exports = RoutineExercise
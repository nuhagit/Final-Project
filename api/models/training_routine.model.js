const { DataTypes } = require('sequelize');
const { connection } = require('../../database/db.index')

const TrainingRoutine = connection.define(
    'training_routine',
    {  },
    
    { timestamps: false, }
);

module.exports = TrainingRoutine
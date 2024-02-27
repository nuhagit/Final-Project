const User = require('../api/models/user.model')
const Training = require('../api/models/training.model')
//const Routine_Exercise = require('../api/models/routine_exercise.model')
const Routine = require('../api/models/routine.model')
// const Training_Routine = require('../api/models/training_routine.model')
const Exercise = require('../api/models/exercise.model')

const addRelations = () => {
    User.hasOne(Training)
    Training.hasMany(User)
    // Routine_Exercise.hasMany(Routine)
    // Routine_Exercise.belongsTo(Training)
    Routine.belongsToMany(Training, {through: 'training_routine'})
    // Training_Routine.belongsTo(Routine)
    // Training_Routine.hasMany(Exercise)
    Exercise.belongsToMany(Routine, {through: 'routine_exercise'})

    // Training.hasMany(User)
    // User.belongsTo(Training)
    // Routine.belongsToMany(Training, {through: 'training_routine'})
    // Training.belongsToMany(Routine, {through: 'training_routine'})
    // Exercise.belongsToMany(Routine, {through: 'routine_exercise'})
    // Routine.belongsToMany(Exercise, {through: 'routine_exercise'})
}

module.exports = addRelations
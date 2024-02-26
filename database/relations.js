const User = require('../api/models/user.model')
const Training = require('../api/models/training.model')
const Routine = require('../api/models/routine.model')
const Exercise = require('../api/models/exercise.model')

const addRelations = () => {
    User.hasOne(Training)
    Training.belongsTo(User)

    Routine.belongsToMany(Training, { through: 'routine_training' })
    
    Exercise.belongsToMany(Routine, { through: 'exercise_routine' })
}
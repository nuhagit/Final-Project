const User = require('../api/models/user.model')
const Training = require('../api/models/training.model')
const Routine = require('../api/models/routine.model')
const Exercise = require('../api/models/exercise.model')

const addRelations = () => {
    User.hasOne(Training)
    Training.hasMany(User)
    Routine.belongsToMany(Training, {through: 'training_routine'})
    Exercise.belongsToMany(Routine, {through: 'routine_exercise'})
}
   
    
    


module.exports = addRelations
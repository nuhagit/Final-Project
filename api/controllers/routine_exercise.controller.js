const RoutineExercise = require('../models/routine_exercise.model')

const createRoutineExercise = async (req, res) => {
    try {
        const routineExercise = await RoutineExercise.create(req.body)
        res.status(200).json(
            {
            message: 'Relation between Routine and Exercise created.',
            result: routineExercise
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                message: 'Error creating relationship between routine and exercise.',
                result: error
            }
        )
    }
}

module.exports = { createRoutineExercise }
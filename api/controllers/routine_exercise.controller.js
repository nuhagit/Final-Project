const Routine_Exercise = require('../models/routine_exercise.model')

const createRoutine_Exercise = async (req, res) => {
    try {
        const routine_exercise = await Routine_Exercise.create(req.body)
        res.status(200).json(
            {
            message: 'Relation between Routine and Exercise created.',
            result: routine_exercise
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

module.exports = { createRoutine_Exercise }
const Exercise = require('../models/exercise.model')

const createExercise = async (req, res) => {
    try {
        const exercise = await Exercise.create(req.body)
        res.status(200).json(
            {
            message: 'Exercise created',
            result: exercise
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                message: 'Error creating exercise',
                result: error
            }
        )
    }
}

module.exports = { createExercise }
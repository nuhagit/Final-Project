const TrainingRoutine = require('../models/training_routine.model')

const createTrainingRoutine = async (req, res) => {
    try {
        const trainingRoutine = await TrainingRoutine.create(req.body)
        res.status(200).json(
            {
            message: 'Relation between Training and Routine created.',
            result: trainingRoutine
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                message: 'Error creating relationship between training and routine.',
                result: error
            }
        )
    }
}

module.exports = { createTrainingRoutine }
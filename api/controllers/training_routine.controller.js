const Training_Routine = require('../models/training_routine.model')

const createTraining_Routine = async (req, res) => {
    try {
        const training_routine = await Training_Routine.create(req.body)
        res.status(200).json(
            {
            message: 'Relation between Training and Routine created.',
            result: training_routine
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

module.exports = { createTraining_Routine }
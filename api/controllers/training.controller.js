const Training = require('../models/training.model')

const createTraining = async (req, res) => {
    try {
        const training = await Training.create(req.body)
        res.status(200).json(
            {
            message: 'Training created',
            result: training
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                message: 'Error creating training',
                result: error
            }
        )
    }
}

module.exports = { createTraining }
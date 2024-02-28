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

const getAllTraining = async (req, res) => {
    try {
        const user = await Training.findAll()

        res.status(200).json(
            {
                message: 'Getting all trainings',
                result: user
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                message: 'Error getting all trainings',
                result: error
            }
        )
    }
}

const getTrainingById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id)

        res.status(200).json(
            {
                message: `Getting user with id ${req.params.id}`,
                result: user
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                message: 'Error getting all users',
                result: error
            }
        )
    }
}


const updateTraining = async (req, res) => {
    try {
        const result = await User.update(req.body, {
            where: {
                id: req.params.id
            }
        })

        res.status(200).json(
            {
                message: 'User updated',
                result: user
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                message: 'Error getting all users',
                result: error
            }
        )
    }
}

const deleteTraining = async (req, res) => {
    try {
        const result = await User.destroy({
            where: {
                id: req.params.id
            }
        })

        if (!user) return res.status(404).send('Training not found')

        res.status(200).json(
            {
                message: 'Training deleted',
                result: user
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                message: ' error deleting Training',
                result: error
            }
        )
    }
}

module.exports = {
    createTraining,
    getAllTraining,
    getTrainingById,
    updateTraining,
    deleteTraining
}


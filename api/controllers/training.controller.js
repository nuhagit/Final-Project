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
        const training = await Training.findAll()

        res.status(200).json(
            {
                message: 'Getting all trainings',
                result: training 
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
        const training = await Training.findByPk(req.params.id)

        res.status(200).json(
            {
                message: `Getting training with id ${req.params.id}`,
                result: training
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                message: 'Error getting all training',
                result: error
            }
        )
    }
}




const updateTraining = async (req, res) => {
    try {
        const result = await Training.update(req.body, {
            where: {
                id: req.params.id
            }
        })

        res.status(200).json(
            {
                message: 'training updated',
                result: training
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                message: 'Error getting all training',
                result: error
            }
        )
    }
}

const deleteTraining = async (req, res) => {
    try {
        const result = await Training.destroy({
            where: {
                id: req.params.id
            }
        })

        if (!training) return res.status(404).send('Training not found')

        return res.status(200).json(
            {
                message: 'Training deleted',
                result: training
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


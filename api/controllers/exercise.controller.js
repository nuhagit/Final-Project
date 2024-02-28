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

const getAllExercises = async (req, res) => {
    try {
        const user = await User.findAll()

        res.status(200).json(
            {
                message: 'Getting all users',
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

const getExerciseById = async (req, res) => {
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


const updateExercise = async (req, res) => {
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

const deleteExercise = async (req, res) => {
    try {
        const result = await User.destroy({
            where: {
                id: req.params.id
            }
        })

        if (!user) return res.status(404).send('Routine not found')

        res.status(200).json(
            {
                message: 'Routine deleted',
                result: user
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                message: 'Error deleting Routine',
                result: error
            }
        )
    }
}

module.exports = {
    createExercise,
    getAllExercises,
    getExerciseById,
    updateExercise,
    deleteExercise
}


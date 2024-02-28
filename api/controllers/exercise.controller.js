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
        const exercise = await Exercise.findAll()

        res.status(200).json(
            {
                message: 'Getting all exercises',
                result: exercise
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                message: 'Error getting all exercises',
                result: error
            }
        )
    }
}

const getExerciseById = async (req, res) => {
    try {
        const exercise= await Exercise.findByPk(req.params.id)

        res.status(200).json(
            {
                message: `Getting exercise with id ${req.params.id}`,
                result: exercise
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                message: 'Error getting all exercises',
                result: error
            }
        )
    }
}


const updateExercise = async (req, res) => {
    try {
        const result = await Exercise.update(req.body, {
            where: {
                id: req.params.id
            }
        })

        res.status(200).json(
            {
                message: 'Exercise updated',
                result: exercise
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                message: 'Error getting all exercises',
                result: error
            }
        )
    }
}

const deleteExercise = async (req, res) => {
    try {
        const result = await Exercises.destroy({
            where: {
                id: req.params.id
            }
        })

        if (!exercise) return res.status(404).send('Routine not found')

        res.status(200).json(
            {
                message: 'Routine deleted',
                result: exercise
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


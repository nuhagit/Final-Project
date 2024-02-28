const Routine = require('../models/routine.model')

const createRoutine = async (req, res) => {
    try {
        const routine = await Routine.create(req.body)
        res.status(200).json(
            {
            message: 'Routine created',
            result: routine
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                message: 'Error creating routine',
                result: error
            }
        )
    }
}

const getAllRoutine = async (req, res) => {
    try {
        const user = await Training.findAll()

        res.status(200).json(
            {
                message: 'Getting all routines',
                result: user
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                message: 'Error getting all routines',
                result: error
            }
        )
    }
}

const getRoutineById = async (req, res) => {
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


const updateRoutine = async (req, res) => {
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

const deleteRoutine = async (req, res) => {
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
    createRoutine,
    getAllRoutine,
    getRoutineById,
    updateRoutine,
    deleteRoutine
}


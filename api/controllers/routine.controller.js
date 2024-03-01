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
        const routine = await Training.findAll()

        res.status(200).json(
            {
                message: 'Getting all routines',
                result: routine
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
        const routine = await Routine.findByPk(req.params.id)

        res.status(200).json(
            {
                message: `Getting routine with id ${req.params.id}`,
                result: routine
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


const updateRoutine = async (req, res) => {
    try {
        const result = await Routine.update(req.body, {
            where: {
                id: req.params.id
            }
        })

        return res.status(200).json(
            {
                message: 'routine updated',
                result: routine
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

const deleteRoutine = async (req, res) => {
    try {
        const result = await Routine.destroy({
            where: {
                id: req.params.id
            }
        })

        if (!routine) return res.status(404).send('Routine not found')

        res.status(200).json(
            {
                message: 'Routine deleted',
                result: routine
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


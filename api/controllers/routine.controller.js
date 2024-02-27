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

module.exports = {
    createRoutine
}
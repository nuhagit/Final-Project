const exerciseRouter = require('express').Router()

const {
    createExercise,
    getAllExercises,
    getExerciseById,
    updateExercise,
    deleteExercise
}
    = require('.././api/controllers/exercise.controller')

    const {
        checkAuth,
        checkAdmin
    } = require('../api/utils/middelwares')


exerciseRouter.get('/', checkAuth, getAllExercises)
exerciseRouter.get('/:id', checkAuth, getExerciseById)
exerciseRouter.post('/', checkAuth, checkAdmin, createExercise)
exerciseRouter.put('/:id', checkAuth, checkAdmin, updateExercise)
exerciseRouter.delete('/:id', checkAuth, checkAdmin, deleteExercise)

module.exports = exerciseRouter;
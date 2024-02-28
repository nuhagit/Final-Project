const trainingRouter = require('express').Router()

const { createTraining, getAllTraining,
    getTrainingById, updateTraining, deleteTraining} = require('.././api/controllers/training.controller')
    const {
        checkAuth,
        checkAdmin
    } = require('../api/utils/middelwares')
trainingRouter.get('/', checkAuth, getAllTraining)
trainingRouter.get('/:id', checkAuth, getTrainingById)
trainingRouter.post('/', checkAuth, checkAdmin, createTraining)
trainingRouter.put('/:id', checkAuth, checkAdmin, updateTraining)
trainingRouter.delete('/:id', checkAuth, checkAdmin, deleteTraining)


module.exports = trainingRouter;
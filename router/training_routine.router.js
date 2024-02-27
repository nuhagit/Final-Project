const trainingRoutineRouter = require('express').Router()

const { createTrainingRoutine } = require('.././api/controllers/training_routine.controller')

trainingRoutineRouter.post('/', createTrainingRoutine)

module.exports = trainingRoutineRouter;
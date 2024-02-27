const training_routineRouter = require('express').Router()

const { createTraining_Routine } = require('.././api/controllers/training_routine.controller')

training_routineRouter.post('/', createTraining_Routine)

module.exports = training_routineRouter;
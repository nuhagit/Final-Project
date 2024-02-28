const exerciseRouter = require('express').Router()

const { createExercise } = require('.././api/controllers/exercise.controller')

exerciseRouter.post('/', createExercise)

module.exports = exerciseRouter;
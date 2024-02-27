const routine_exerciseRouter = require('express').Router()

const { createRoutine_Exercise } = require('.././api/controllers/routine_exercise.controller')

routine_exerciseRouter.post('/', createRoutine_Exercise)

module.exports = routine_exerciseRouter;
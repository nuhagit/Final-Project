const routineRouter = require('express').Router()

const { createRoutine } = require('.././api/controllers/routine.controller')

routineRouter.post('/', createRoutine)

module.exports = routineRouter;
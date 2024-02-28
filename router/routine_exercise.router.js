const routineExerciseRouter = require('express').Router()

const { createRoutineExercise } = require('.././api/controllers/routine_exercise.controller')

routineExerciseRouter.post('/', createRoutineExercise)

module.exports = routineExerciseRouter;
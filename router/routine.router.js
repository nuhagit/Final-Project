const routineRouter = require('express').Router()

const { createRoutine,
    getAllRoutine,
    getRoutineById,
    updateRoutine, 
    deleteRoutine} = require('.././api/controllers/routine.controller')
    const {
        checkAuth,
        checkAdmin
    } = require('../api/utils/middelwares')

routineRouter.get('/', checkAuth, getAllRoutine)
routineRouter.get('/:id', checkAuth, getRoutineById)
routineRouter.post('/', checkAuth, checkAdmin, createRoutine)
routineRouter.put('/:id', checkAuth, checkAdmin, updateRoutine)
routineRouter.delete('/:id', checkAuth, checkAdmin, deleteRoutine)

module.exports = routineRouter;
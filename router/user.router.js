const userRouter = require('express').Router()

const {
    createUser, getAllUsers, getUserById, updateUser, deleteUser, getUserTraining 
}
    = require('.././api/controllers/user.controller')

    const {
        checkAuth,
        checkAdmin
    } = require('../api/utils/middelwares')

    userRouter.get('/', checkAuth, getAllUsers)
    userRouter.get('/training/:id', getUserTraining)
    userRouter.get('/:id', checkAuth, getUserById)
    userRouter.post('/', checkAuth, checkAdmin, createUser)
    userRouter.put('/:id', checkAuth, checkAdmin, updateUser)
    userRouter.delete('/:id', checkAuth, checkAdmin, deleteUser)

module.exports = userRouter;
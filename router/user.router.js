const userRouter = require('express').Router()

const {
    createUser, getAllUsers, getUserById, updateUser
} = require('.././api/controllers/user.controller')

const { checkAuth, checkAdmin } = require('../api/utils/middlewares')

userRouter.get('/', checkAuth, getAllUsers)
userRouter.get('/:id', checkAuth, getUserById)
userRouter.post('/', checkAuth, checkAdmin, createUser)
userRouter.put('/:id', checkAuth, checkAdmin, updateUser)

module.exports = userRouter;
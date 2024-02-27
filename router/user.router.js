const userRouter = require('express').Router()

const {
    createUser
}
    = require('.././api/controllers/user.controller')

userRouter.post('/', createUser)

module.exports = userRouter;
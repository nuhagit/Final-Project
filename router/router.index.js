const router = require('express').Router()

const userRouter = require('./user.router')
const exerciseRouter = require('./exercise.router')
const authRouter = require('./auth.router')

router.use('/auth', authRouter)
router.use('/user', userRouter )
router.use('/exercise', exerciseRouter )

module.exports = router
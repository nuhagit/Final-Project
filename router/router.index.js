const router = require('express').Router()
const exerciseRouter = require('./exercise.router')
const routineRouter = require('./routine.router')
const trainingRouter = require('./training.router')
const userRouter = require('./user.router')
const authRouter = require('./auth.router')
router.use('/exercise', exerciseRouter )
router.use('/routine', routineRouter )
router.use('/training', trainingRouter )
router.use('/user', userRouter )
router.use('/auth', authRouter)


module.exports = router
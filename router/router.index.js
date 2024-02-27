const router = require('express').Router()
const exerciseRouter = require('./exercise.router')
const routine_exerciseRouter = require('./routine_exercise.router')
const routineRouter = require('./routine.router')
const training_routineRouter = require('./training_routine.router')
const trainingRouter = require('./training.router')
const userRouter = require('./user.router')

router.use('/exercise', exerciseRouter )
router.use('/routine_exercise', routine_exerciseRouter )
router.use('/routine', routineRouter )
router.use('/training_routine', training_routineRouter )
router.use('/training', trainingRouter )
router.use('/user', userRouter )

module.exports = router
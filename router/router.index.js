const router = require('express').Router()
const userRouter = require('./user.router')
const exerciseRouter = require('./exercise.router')

router.use('/user', userRouter )
router.use('/exercise', exerciseRouter )

module.exports = router
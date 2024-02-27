const trainingRouter = require('express').Router()

const {
    createTraining
}
    = require('.././api/controllers/training.controller')

trainingRouter.post('/', createTraining)

module.exports = trainingRouter;
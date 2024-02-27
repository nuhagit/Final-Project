const authRouter = require('express').Router();

const {signup} = require('.././api/controllers/auth.controllers');

authRouter.post('/signup', signup);

module.exports = authRouter;
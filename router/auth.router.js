const authRouter = require('express').Router();

const {signup, login} = require('.././api/controllers/auth.controllers');

authRouter.post('/signup', signup);
authRouter.post('/login', login)

module.exports = authRouter;
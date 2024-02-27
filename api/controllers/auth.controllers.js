const User = require('../models/user.model')

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken ')

async function signup(req,res) {
    try {
        const salt = bcrypt.genSaltSync(parseInt(process.env.SALT_ROUNDS));
        const hash = bcrypt.hashSync(req.body.password, salt);

        req.body.password = hash

       
        const user = await User.create(req.body)

        return res
        .status(200)
        .json({
            message:"User created",
            name: user.username,
            email: user.email,
            password: user.password,
            role: user.role,
            age: user.age,
            sex: user.sex,
            height: user.height,
            weight: user.weight,
            availability: user.availability,
            goal: user.goal,



        });
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


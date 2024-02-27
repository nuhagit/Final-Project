const User = require('../models/user.model')
const bcrypt = require('bcrypt')

const createUser = async (req, res) => {
    try {
        const salt = bcrypt.genSaltSync(parseInt(process.env.SALT_ROUNDS));
        const hash = bcrypt.hashSync(req.body.password, salt);
        console.log('hola')

    req.body.password = hash
    const user = await User.create(req.body)

    res.status(200).json(
        {
            message: 'User created',
            result: user
        }
    )
    } catch (error) {
        res.status(500).json(
            {
                message: 'Error creating user',
                result: error
            }
        )
    }
}

module.exports = {
    createUser
}

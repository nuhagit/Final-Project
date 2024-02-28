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

const getAllUsers = async (req, res) => {
    try {
        const user = await User.findAll()

        res.status(200).json(
            {
                message: 'Getting all users',
                result: user
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                message: 'Error getting all users',
                result: error
            }
        )
    }
}

const getUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id)

        res.status(200).json(
            {
                message: `Getting user with id ${req.params.id}`,
                result: user
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                message: 'Error getting all users',
                result: error
            }
        )
    }
}


const updateUser = async (req, res) => {
    try {
        const result = await User.update(req.body, {
            where: {
                id: req.params.id
            }
        })

        res.status(200).json(
            {
                message: 'User updated',
                result: user
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                message: 'Error getting all users',
                result: error
            }
        )
    }
}

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser
}
const User = require('../models/user.model')
const bcrypt = require('bcrypt')

const createUser = async (req, res) => {
    try {
        const salt = bcrypt.genSaltSync(parseInt(process.env.SALT_ROUNDS));
        const hash = bcrypt.hashSync(req.body.password, salt);
      

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
/* 
const getUserTraining = async (req, res) => {
    try {
        const user = await User.findByPk(1, {
            include: { model: Tool, as: 'trainings' },
        });

        return res.status(200).json({
            message: `Getting user with id ${1}`,
            result: user,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Internal Server Error',
            error: error.message,
        });
    }
};
 */

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

const deleteUser = async (req, res) => {
    try {
        const result = await User.destroy({
            where: {
                id: req.params.id
            }
        })

        if (!user) return res.status(404).send('User not found')

        return res.status(200).json(
            {
                message: 'User deleted',
                result: user
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                message: 'Error deleting user',
                result: error
            }
        )
    }
}



module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
   
}
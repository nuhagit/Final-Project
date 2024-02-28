const User = require('../models/user.model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

async function signup(req,res) {
    try {
        const salt = bcrypt.genSaltSync(parseInt(process.env.SALT_ROUNDS));
        const hash = bcrypt.hashSync(req.body.password, salt);
        
        req.body.password = hash
        
        const user = await User.create(req.body)
        const token = jwt.sign({email: user.email}, process.env.JWT_SECRET, {expiresIn: '1h'})

        return res
        .status(200)
        .json({
            message:"User created",
           result: token
         });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ 
            message: 'error siging up',
            result:error
    })
    } 
}

async function login(req, res) {
  console.log(req)
    try {
      const user = await User.findOne({
        where: {
          email: req.body.email
        }
      })
  
      if (!user) return res.status(404).send('Error: Email or Password incorrect')
          
          const comparePass = bcrypt.compareSync(req.body.password, user.password)
          
          if (comparePass) {
        const token = jwt.sign({email: user.email}, process.env.JWT_SECRET, { expiresIn: '1h' })
        return res.status(200).json({ 
          message: 'Login succesful', 
          result: token,
        });
      } else {
         return res.status(404).json('Error: Email or Password incorrect')
      }
    } catch (error) {
      return res.status(500).json({
        message: 'login error',
        result: error
      })
    }
  }
   

module.exports = {
    signup,
    login
}
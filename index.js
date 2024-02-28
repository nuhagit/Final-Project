require('dotenv').config();
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const {
    checkDB,
    synchModels
} = require('./database/db.index.js')

const addRelations = require('./database/relations.js')

const connectToDB = async () => {
    await checkDB()
    addRelations()
    await synchModels()
}

const startExpress = () => { 
    try {
        const mainRouter = require('./router/router.index.js')
        const app = express ()

        app.use(cors())
        app.use(morgan('dev'))
        app.use(express.json())

        app.use('/api', mainRouter )

        app.listen(process.env.PORT, () => {
        console.log(`Express started. Listening ${process.env.PORT}`)
    })
    } catch(error) { throw new Error (error) }
    }
    ;(async () => {
        await connectToDB()
        startExpress()
       
    })()
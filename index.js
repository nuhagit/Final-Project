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
const app = express ()
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.get('/api', (req,res) => {
res.send('request received')
})
app.listen(process.env.PORT, () => {
    console.log(`Express started. Listening ${process.env.PORT}`)
})
}
;(async () => {
    await connectToDB()
    startExpress()
   
})()

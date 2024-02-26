require('dotenv').config();

const {
    checkDB,
    synchModels
} = require('./database/db.index.js')

const addRelations = require('./database/relations.js')

;(async () => {
    await checkDB()
    synchModels()
    addRelations()
})()

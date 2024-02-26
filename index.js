require('dotenv').config();

const {
    checkDB,
    synchModels
} = require('./database/db.index.js')


;(async () => {
    await checkDB()
    await synchModels()
}) ()

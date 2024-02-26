require('dotenv').config();

const {
    checkDB,
    syncModels
} = require('./database/db.index.js')


;(async () => {
    await checkDB()
    await syncModels()
}) ()

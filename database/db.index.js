const { Sequelize } = require('sequelize');


const connection = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        logging: true
    }
  );

const checkDB = async() => {

    try {
      await connection.authenticate();
      console.log('Connected to database');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }

}

const synchModels = async () => {
  try {
    await connection.sync({ force: true })
    console.log('Models synched')
  } catch (error) {
    console.error('error')
  }
}

module.exports = {
    connection,
    checkDB,
    synchModels
}


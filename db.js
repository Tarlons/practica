const {Sequelize} = require('sequelize')
require ("dotenv").config();

 //const devConfig = {
  //  database: process.env.DB_NAME, // Название БД
 //   user: process.env.DB_USER, // Пользователь
  //  password: process.env.DB_PASSWORD, // ПАРОЛЬ
   // host: process.env.DB_HOST,
 //   port: process.env.DB_PORT

//}

const devConfig = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

const proConfig = process.env.DATABASE_URL; //heroku addons

const pool = new Pool({
  connectionString:
    process.env.NODE_ENV === "production" ? proConfig : devConfig,
});

module.exports = pool;
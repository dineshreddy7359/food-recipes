const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  HOST: 'localhost',
  PORT: '3000'
};
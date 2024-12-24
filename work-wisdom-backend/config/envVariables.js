require('dotenv').config(); // Load environment variables from .env file

const config = {
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DATABASE_URL: process.env.DATABASE_URL || 'mongodb://localhost:27017/dev-db',
  JWT_SECRET: process.env.JWT_SECRET || 'defaultSecret',
  ORIGIN: process.env.ORIGIN
};

module.exports = config;
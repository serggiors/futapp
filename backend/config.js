const dotenv = require("dotenv")
dotenv.config();
module.exports = {
    SERVER_PORT: process.env.SERVER_PORT || 4000,
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_NAME: process.env.DB_NAME || '',
    DB_USER: process.env.DB_USER || '',
    DB_PASSWORD: process.env.DB_PASSWORD || '',
    DB_DIALECT: process.env.DB_DIALECT || 'mysql',
    EMAIL_USERNAME: process.env.EMAIL_USERNAME || '',
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD || '',
    JWT_KEY: process.env.JWT_KEY,

    CLOUDINARY_URL: process.env.CLOUDINARY_URL,
    CLOUD_NAME: process.env.CLOUD_NAME,
    CLOUD_KEY: process.env.CLOUD_KEY,
    CLOUD_SECRET: process.env.CLOUD_SECRET,
}
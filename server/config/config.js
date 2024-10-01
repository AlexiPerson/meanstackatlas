// check env.
var env = process.env.NODE_ENV || 'development';
// fetch env. config
var config = require('./config.json');
var envConfig = config[env];
// add env. config values to process.env
Object.keys(envConfig).forEach(key => process.env[key] = envConfig[key]);

// import mongoose from "mongoose";

// import dotenv from 'dotenv';
// dotenv.config();

// const config = {
//     app_name: process.env['APP_NAME'],
//     port: process.env['PORT'] ?? 3000,
//     db_uri: process.env['DB_URI'] ?? 'mongodb://localhost:27017/MEANStackDB',
//     db_options: {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     }
// }

// export default config;
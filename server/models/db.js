//const mongoose = require('mongoose');

// import mongoose from 'mongoose';
// import user from './user.model';
// import config from '../config/config.js'



// mongoose.connect(process.env.MONGODB_URI, (err) => {
//     if (!err) { console.log('MongoDB connection succeeded.'); }
//     else { console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)); }
// });

// const connectToMongo = async () => {
//     try {
//         console.log("inside connectToMongo");
//         mongoose.set('strictQuery', false);
//         //await mongoose.connect(config.db_uri, { useNewUrlParser: true,  useNewUrlParser: true });
//         //await mongoose.connect('mongodb://mongo:27017/MEANStackDB', { useNewUrlParser: true,  useNewUrlParser: true });
//         await mongoose.connect('mongodb://localhost:27017/MEANStackDB', { useNewUrlParser: true,  useNewUrlParser: true });
//         // mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true,  useNewUrlParser: true });
//         console.log('Mongo connection succeeded');
//     }
//     catch (error) {
//         console.log('Error in MongoDBV connection: ' + JSON.stringify(error, undefined, 2));
//         process.exit();
//     }````````````````````````````````````
// }

//await connectToMongo();
//module.exports = connectToMongo;
//require('./user.model');

//new below
const mongoose = require('mongoose');
const connectToMongo = async () => {
    try {
        console.log("inside connectToMongo");
        mongoose.set('strictQuery', false);
        //await mongoose.connect(config.db_uri, { useNewUrlParser: true,  useNewUrlParser: true });
        await mongoose.connect('mongodb://mongo:27017/MEANStackDB', { useNewUrlParser: true,  useNewUrlParser: true });
        //await mongoose.connect('mongodb://0.0.0.0:27017/MEANStackDB', { useNewUrlParser: true,  useNewUrlParser: true });
        console.log('Mongo connection succeeded');
    }
    catch (error) {
        console.log('Error in MongoDBV connection: ' + JSON.stringify(error, undefined, 2));
        process.exit();
    }
}
connectToMongo();
//module.exports = connectToMongo;

require('./user.model');
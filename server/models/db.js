const mongoose = require('mongoose');
const connectToMongo = async () => {
    try {
        console.log("inside connectToMongo");
        mongoose.set('strictQuery', false);
        //await mongoose.connect(config.db_uri, { useNewUrlParser: true,  useNewUrlParser: true });
        await mongoose.connect('mongodb+srv://alexiperson:admin@mean-stack-cluster.cj85p.mongodb.net/?retryWrites=true&w=majority&appName=mean-stack-cluster', 
            {useNewUrlParser: true,  useNewUrlParser: true });
        //await mongoose.connect('mongodb://mongo:27017/MEANStackDB', { useNewUrlParser: true,  useNewUrlParser: true });
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
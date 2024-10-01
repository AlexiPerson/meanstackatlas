// //require('./config/config');
// //require('./models/db');

// import config from './config/config.js';

// // const express = require('express');
// // const bodyParser = require('body-parser');
// // const cors = require('cors');

// import express from'express';
// import bodyParser from 'body-parser';
// import cors from 'cors';

// // const rtsIndex = require('./routes/index.router');
// import rtsIndex from './routes/index.router.js';

// var app = express();

// // middleware
// app.use(bodyParser.json());
// app.use(cors());
// app.use('/api', rtsIndex);

// // error handler
// app.use((err, req, res, next) => {
//     if (err.name === 'ValidationError') {
//         var valErrors = [];
//         Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
//         res.status(422).send(valErrors)
//     }
// });

// app.get('/', (req, res) => {
//     res.send("Hello World")
// });

// // start server
// // app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));

// app.listen(3000, () =>{
//     console.log(config.app_name+" Started on Port 3000")
// })

//new github beloow
require('./config/config');
require('./models/db');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const rtsIndex = require('./routes/index.router');

var app = express();

// middleware
app.use(bodyParser.json());
app.use(cors());
app.use('/api', rtsIndex);

// error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
});

app.get('/', (req, res) => {
    res.send("Hello World")
});

// start server
app.listen(3000, () => console.log(`Server started at port : 3000`));
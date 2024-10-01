// // const express = require('express');

// import express from 'express';
// import ctrlUser from'../controllers/user.controller.js';
// const router = express.Router();

// // const ctrlUser = require('../controllers/user.controller');

// router.post('/register', ctrlUser.register);

// //module.exports = router;
// //new below
// export default router;

//new below
const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');

router.post('/register', ctrlUser.register);

module.exports = router;







// old version below
// // const mongoose = require('mongoose');

// import mongoose from 'mongoose';
// // const bcrypt = require('bcryptjs');
// import bcrypt from 'bcryptjs';

// //const User = mongoose.model('User');
// import User from '../models/user.model.js';

// async function hashPassword(password) {
//     const salt = await bcrypt.genSalt(10)
//     const hashedPassword = await bcrypt.hash(String(password), salt)
//     return hashedPassword
// }

// // module.exports.register = async(req, res) => {
// async function register(req, res) {
//     console.log('inside register func');
//     const hashedPassword = await hashPassword(req.body.password);
//     console.log("after hashpassword");
//     User.findOne({email: req.body.email}).then((user) => {
//         console.log("inside findone");
//         if (user) {
//             return res
//                 .status(422)
//                 .json({email: "A user has already registered with this email."});
//         }
//         else {
//             console.log("in find one else");
//             const newUser = new User({
//                 fullName: req.body.fullName,
//                 email: req.body.email,
//                 password: hashedPassword
//             });
//             newUser.save();  
//             return res.status(200).json({msg: newUser});
//         }
//     });
// }

// //mongoose.model('User', userSchema);
// //module.exports = mongoose.model('User', userSchema);
// //new below
// export default {
//     register:register
// };

//new version below
const mongoose = require('mongoose');

const User = mongoose.model('User');
const bcrypt = require('bcryptjs');

async function hashPassword(password) {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(String(password), salt)
    return hashedPassword
}

module.exports.register = async(req, res) => {
    console.log('inside register func');
    const hashedPassword = await hashPassword(req.body.password);
    console.log("after hashpassword");
    User.findOne({email: req.body.email}).then((user) => {
        console.log("inside findone");
        if (user) {
            return res
                .status(422)
                .json({email: "A user has already registered with this email."});
        }
        else {
            console.log("in find one else");
            const newUser = new User({
                fullName: req.body.fullName,
                email: req.body.email,
                password: hashedPassword
            });
            //newUser.save();  
            newUser.save().then(() => console.log("saved successfully"));
            return res.status(200).json({msg: newUser});
        }
    });
}
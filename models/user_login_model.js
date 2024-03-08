const mongoose = require('mongoose'); 

let userLoginSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    userType:{
        type:String,
        required:true,
        default:"user"
    }
});

module.exports = mongoose.model('users_login', userLoginSchema);
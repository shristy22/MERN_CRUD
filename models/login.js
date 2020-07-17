const mongo = require('mongoose');
const login_schema = mongo.Schema({
    name:{
        type: String,
        required: true,
       
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    }
});
const login = mongo.model('login',login_schema);
module.exports = login;
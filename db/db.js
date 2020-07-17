const mongo = require('mongoose');
const mongo_url = 'mongodb://localhost/first_db';

mongo.connect(mongo_url,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify:true,

});
const db = mongo.connection;
db ? console.log('database connected yipee') : console.log('error');
module.exports = db;

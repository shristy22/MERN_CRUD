const express = require('express');
const app = express();
const db = require('./db/db');
const apiroute = require('./routes/routes')
const bodyparser = require('body-parser');


app.use(bodyparser.urlencoded({
    extended:true
}));
app.use('/',apiroute);

app.listen(1000,console.log('server started at port 1000'));




// make a schema of a registering details email, pass, name 
// api 
/*
1. register -> name , email ,pass post 
2. login ->email, pass post
3. findone -> email get
4. find all -> nothing get
5. delete one ->email post,delete
6. update one -> email and name or password post or put 
try to understand the difference between post put delete and u

*/

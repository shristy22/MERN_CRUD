const router = require('express').Router();
const log_model = require('../models/login');

router.get('/',(req,res) => {
    res.send(`
    <h1>Welcome page</h1>
   <a href='/login'>Login</a>
   <br/><br/><br/>
   <a href='/register'>Register</a>
    `)
});

router.post('/register', async(req,res)=>{
    console.log('hello')
    const new_person_object = new log_model({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    new_person_object.save().then((response)=>{res.json(response)}).catch((err)=>{res.json('This email already exist, try different email.')})
})

router.get('/login',async(req,res)=>{
    console.log('login me ja rha hai')

    const {email,password} = req.body;
   if(email && password){
        const exist = await log_model.findOne({email:email});
        if(exist){
            if(exist.password === password){
                res.json('you are looged in')
            }
            else{
                res.json('please enter correct password');
            }
        }
        else{
            res.json("email id doesn't exist please register");
        }
   }
   else res.json('please enter correct credentials');
    

});
router.get('/findall',(req,res) =>{
    log_model.find().then((response)=>res.json(response));
});
router.post('/delete',async (req,res)=>{
   console.log('yaha delete me ja raha h')
    const del =  await log_model.findOneAndDelete({email:req.body.email})
    console.log(del);
    res.json('user deleted')
    
});
router.get('/findbyemail', (req,res) =>{
    log_model.findOne({email:req.body.email}).then((response)=>res.json(response)).catch(err=>res.json(err));
})
router.post('/update',async (req,res)=>{
    const { email,name, password } = req.body;
    const to_update = {
        name :name ,
        password:password
    };
    const to_find = {
        email:email
    };
    const updated_result =  await log_model.findOneAndUpdate(to_find,to_update);
    console.log(updated_result);
    res.json(updated_result);
});

module.exports = router;

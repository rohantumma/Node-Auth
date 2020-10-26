const express = require ('express');

const app=express();

const mongoose =require ('mongoose');

const dotenv = require ('dotenv');

//connect to DB

dotenv.config();

mongoose.connect(process.env.DB_CONNEC,
{ useNewUrlParser: true },
()=> console.log('Con db....'));

//import router

const authRoute= require ('./routes/auth');


app.use('/api/user',authRoute);

app.use('/api/user',authRoute);


app.listen (3000,()=>{

    console.log('Server is on..');
})

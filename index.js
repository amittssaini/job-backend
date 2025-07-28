// backend starting code 
// backend code of job-portal
const express = require('express');
const authRouter = require('./routes/auth.route')
const mongoose = require('mongoose')
const cors = require('cors');
require('dotenv').config();

const app = new express();

mongoose
.connect(process.env.DB_URI)
.then(()=>{
console.log('DB IS CONNECTED');
app.listen((process.env.PORT),()=>console.log("SERVER IS CONNECTED AT THE ",process.env.PORT))
})
.catch((error)=>console.log("error occur during connection ",error));
app.use(cors());
app.use(express.json());
app.use('/job/auth',authRouter);

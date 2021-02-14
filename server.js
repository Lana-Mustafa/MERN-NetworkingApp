const express = require('express');
const connectDB = require('./config/db');

const app = express();

// connect to database
connectDB();

app.get('/',(req ,res)=> res.send('The API is Running'));

const PORT = process.env.PORT || 5000 ;

app.listen( PORT , ()=> console.log(`Server started on Port ${PORT}`));
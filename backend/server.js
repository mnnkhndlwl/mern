const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const colors = require('colors');
const connectDB = require('./config/db');
const {errorHandler} = require('../backend/middleware/errorMiddleware')

connectDB();//calling function to coonect to mongodb

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/goalRoutes'));  
app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler);

app.listen(port , () => console.log(`Server started on port ${port}`));
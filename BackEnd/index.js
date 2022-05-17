const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

//Importing Routes
const authRoute = require('./routes/auth');

// Database Connection
mongoose.connect(process.env.DB_URL, () => {
    console.log("Database Connected");
});

//Middleware
app.use(express.json());

//Route Middleware
app.use('/api/user', authRoute);


app.listen(process.env.PORT, () => console.log(`Server Running on Port ${process.env.PORT}`))
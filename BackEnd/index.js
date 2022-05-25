const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

//Importing Routes
const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');

// Database Connection
mongoose.connect(process.env.DB_URL, () => {
    console.log("Database Connected");
});

//Middleware
app.use(express.json());

//Route Middleware
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);


app.listen(process.env.PORT, () => console.log(`Server Running on Port ${process.env.PORT}`))
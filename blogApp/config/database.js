const mongoose = require('mongoose');

require('dotenv').config();   // Group 

const connectWithDb = () => {
    mongoose.connect(process.env.DATABASE_URL)
}
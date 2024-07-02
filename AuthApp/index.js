const express = require('express');
const app = express();

require('dotenv').config();  // dotenv used to load the required data into this.
const PORT = process.env.PORT || 4000;

const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(express.json());    // it is a middleware function that is used to parse incoming requests with JSON payloadsa 

const connectWithDB = require("./config/database")
connectWithDB();

// route import and mount
const user = require("./routes/user")
app.use("/api/v1", user);

//activate

app.listen(PORT, ()=>{
    console.log(`App is listening at ${PORT}`);
})
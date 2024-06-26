const mongoose = require("mongoose");

require("dotenv").config();

const connectWithDb = () => {
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlPraser: true,
        useUnifiedTopology: true
    })
    .then(console.log("DB connected successfully"))
    .catch((error)=>{
        console.log("DB Facing Connection Issues");
        console.log(error)
        process.exit(1);
    })
}

module.exports = connectWithDb
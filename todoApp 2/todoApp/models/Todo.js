const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
    {
        acc_c:{
            type:Number,
            required:true,
            maxLength:50,
        },
        app_kwh: {
            type:String,
            required:true,
            maxLength:50,
        },
        createdAt:{
            type:Date,
            required:true,
            default:Date.now(),
        },
        updatedAt:{
            type:Date,
            required:true,
            default:Date.now(),
        }
        
    }
);

module.exports = mongoose.model("Todo", todoSchema);
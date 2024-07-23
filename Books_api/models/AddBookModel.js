const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    book_name: {
        type: String,
        required: true,
        trim: true
    },
    author_name: {
        type: String,
        required: true,
        trim: true,
    },
    launch_date: {
        type: Date,
        required: true
        // default: null
    },
    book_price: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("addbook", userSchema);
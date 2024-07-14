
const books = require("../models/BooksModel")
require("dotenv").config();

exports.register = async (req,res) => {
    try{
        const {username,email,password,role} = req.body;

        // create user with create function
        const user = await books.create({
            username, email, password, role
        })

        return res.json({
            success: true,
            data: req.body,
            message: "User Created Successfully",
        })
    } catch(err){
        console.log("Errrr----> ",err);
        res.json({
            success: false,
            message: "User is not registered"
        })
    }
}

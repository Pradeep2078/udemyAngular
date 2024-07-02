const express = require("express");
const router = express.Router();

const{login,signup} = require("../Controllers/Auth");
const {auth, isStudent, isAdmin} = require("../middleware/auth");
const User = require("../models/User");

router.post("/login", login);
router.post("/signup", signup);

// testing protected routes
router.get("/test", auth, (req,res)=>{
    res.json({
        success: true,
        message: "Welcome to the Protected route for Tests"
    })
});

// protected route
router.get("/student", auth, isStudent, (req,res)=>{
    res.json({
        success: true,
        message: "Welcome to the Protected route for Students"
    })
});

router.get("/admin", auth, isAdmin, (req,res)=>{
    res.json({
        success: true,
        message: "Welcome to the Protected route for Admin"
    })
});

router.get("/getEmail", auth, async (req,res) => {

    try{
        const id = req.user.id;
        console.log("ID : ", id);
        const user = await User.findById(id);

        res.status(200).json({
            success: true,
            user:user,
            message: 'Welcome to the email route',
        })
    } catch(error){
        res.status(500).json({
            success: false,
            error:error.message,
            message: 'code was blast',
        })
    }

    const id = req.user.id;
    console.log("ID: ", id);
    res.json({
        success: true,
        id:id,
        message: "Welcome to the Email Route...."
    })
})

module.exports = router;
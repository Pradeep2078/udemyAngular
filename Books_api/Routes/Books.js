const express = require("express");
const router = express.Router();

const { register }  = require('../controllers/BooksController')

router.post("/register", register);

module.exports = router;
const express = require("express");
const router = express.Router();

const { register, login, addBook, getBooks, updateBook, deleteBook } = require('../controllers/BooksController')

router.post("/register", register);
router.post("/login", login);
router.post("/addbooks", addBook);
// router.get("/login/:username/:password", login);
router.get("/getbooks", getBooks);
router.put('/updatebook/:id', updateBook);
router.delete('/books/:id', deleteBook);


module.exports = router;
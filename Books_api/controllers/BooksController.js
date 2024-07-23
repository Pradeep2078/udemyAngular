
const books = require("../models/BooksModel")
const addbook = require("../models/AddBookModel")
require("dotenv").config();

exports.register = async (req, res) => {
    try {
        const { username, email, password, role } = req.body;

        // create user with create function
        const user = await books.create({
            username, email, password, role
        })

        return res.json({
            success: true,
            data: req.body,
            message: "User Created Successfully",
        })
    } catch (err) {
        console.log("Errrr----> ", err);
        res.json({
            success: false,
            message: "User is not registered"
        })
    }
}

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        let login_data = await books.findOne({ "username": username, "password": password })
        // let login_status = login_data.some(ele => ele.username === username && ele.password === password);
        console.log(login_data)
        if (login_data) {
            console.log("Username : ", username, " Password : ", password);
            res.json({
                status: true,
                "statusMessage": "User logged in successfullyyyy!!!!"
            })
        } else {
            res.json({
                status: false,
                "statusMessage": "User not logged in successfullyyyy!!!!"
            })
        }
    } catch (error) {
        console.log("ERRRORO------> ", error);
        res.json({
            succss: false,
            statusMessage: "User credential wrong !!!!!!!!"
        })
    }
}

exports.addBook = async (req, res) => {
    try {
        const booksData = req.body;
        console.log(booksData)
        let add_book_status = await addbook.create(booksData);

        if (add_book_status) {
            console.log("YES DATA ADDED SUCCESSFULLY")
            res.json({
                status: true,
                statusMessage: "Book Added Successfully!!!!!!"
            })
        } else {
            console.log("No DATA NOT ADDED")
            res.json({
                status: false,
                statusMessage: "Book Not Added !!!!!!"
            })
        }
    } catch (error) {
        console.log("Error -----> ", error)
        res.json({
            status: false,
            statusMessage: "Book Error !!!!!!"
        })
    }
}

exports.getBooks = async (req, res) => {
    try {
        const books_list = await addbook.find();

        if (Array.isArray(books_list)) {
            console.log("Books List-------> ", books_list);
            res.json({
                status: true,
                "Data": books_list,
                statusMessage: "Books fetched successfully!!!!!!"
            })
        } else {
            console.log("No Book Found")
            res.json({
                status: false,
                statusMessage: "NO Book  FOund !!!!!!"
            })
        }
    } catch (error) {
        console.log("Error -----> ", error)
        res.json({
            status: false,
            statusMessage: "Book Fetching Error !!!!!!"
        })
    }
}

exports.updateBook = async (req, res) => {
    try {
        const id = req.params.id;
        const updated_data = req.body;

        const update_status = await addbook.findByIdAndUpdate(id, updated_data, { new: true });
        console.log(update_status)
        if (update_status) {
            res.json({
                status: true,
                statusMessage: 'Book updated successfully!',
                data: update_status
            });
        } else {
            res.status(404).json({
                status: false,
                statusMessage: 'Book not found!'
            });
        }
    } catch (error) {
        res.json({
            status: false,
            statusMessage: 'Internal Server Error'
        })
    }
}

exports.deleteBook = async (req, res) => {
    try {
        const book = await addbook.findByIdAndDelete(req.params.id);
        if (!book) {
            return res.json({ status: false, statusMessage: "Book not found" });
        }
        res.json({ status: true, statusMessage: "Book deleted successfully" });
    } catch (error) {
        console.error(error);
        res.json({ status: false, statusMessage: "Server error" });
    }
}
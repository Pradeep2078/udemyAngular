const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const cors = require('cors');
const port = 3000;

// Set up multer for file upload
const upload = multer({ dest: 'uploads/' });

// const corsOptions = {
//     origin: 'http://127.0.0.1:5500', // Only allow this origin
//     methods: ['GET', 'POST'], // Allow these HTTP methods
//     allowedHeaders: ['Content-Type'] // Allow these headers
// };

// app.use(cors(corsOptions));

app.use(cors());

app.use(express.static('public')); // Serve static files (HTML, JS) from 'public' directory

// Handle file upload
app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    // File information
    console.log('File uploaded:', req.file);

    res.send('File uploaded successfully!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

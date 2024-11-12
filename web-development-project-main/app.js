// app.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Route to serve the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route to serve the about page
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

// Route to serve the contact page
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// Handle form submission
app.post('/submit-form', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    
    console.log(`Name: ${name}, Email: ${email}`);
    res.send(`<h1>Thank you, ${name}! We will contact you at ${email}.</h1>`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

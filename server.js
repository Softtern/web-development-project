// server.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, '/')));

// Body parser to handle form data
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});

// Handle form submission
app.post('/submit-form', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    
    // For now, just print form data to the console
    console.log(`Name: ${name}, Email: ${email}`);
    
    // You can later store this data in a database
    res.send(`<h1>Thank you, ${name}! We will contact you at ${email}.</h1>`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

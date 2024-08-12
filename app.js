const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Routes
app.get('/admin', (req, res) => {
    res.render('layout', { title: 'Admin Dashboard' });
});

app.get('/admin/products', (req, res) => {
    res.render('products', { title: 'Kelola Produk' });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

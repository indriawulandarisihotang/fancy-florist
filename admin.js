const express = require('express');
const router = express.Router();

// Middleware untuk autentikasi
function isAuthenticated(req, res, next) {
  if (req.session && req.session.user && req.session.user.isAdmin) {
    return next();
  } else {
    res.redirect('/login');
  }
}

// Dashboard Admin
router.get('/', isAuthenticated, (req, res) => {
  res.render('layout', { title: 'Admin Dashboard' });
});

// Halaman Kelola Produk
router.get('/products', isAuthenticated, (req, res) => {
  res.render('products', { title: 'Kelola Produk' });
});

// Halaman Kelola Blog
router.get('/blogs', isAuthenticated, (req, res) => {
  res.render('blogs', { title: 'Kelola Blog' });
});

// Halaman Kelola Transaksi
router.get('/transactions', isAuthenticated, (req, res) => {
  res.render('transactions', { title: 'Kelola Transaksi' });
});

// Halaman Laporan Penjualan
router.get('/reports', isAuthenticated, (req, res) => {
  res.render('reports', { title: 'Laporan Penjualan' });
});

module.exports = router;

router.get('/products', (req, res) => {
  res.render('products', { title: 'Kelola Produk' });
});

router.get('/products/new', (req, res) => {
  res.render('product-form', { title: 'Tambah Produk' });
});

router.get('/blogs', (req, res) => {
  res.render('blogs', { title: 'Kelola Blog' });
});

router.get('/blogs/new', (req, res) => {
  res.render('blog-form', { title: 'Tambah Blog' });
});

router.get('/transactions', (req, res) => {
  res.render('transactions', { title: 'Kelola Transaksi' });
});

router.get('/sales-report', (req, res) => {
  res.render('sales-report', { title: 'Laporan Penjualan' });
});

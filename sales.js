router.get('/products', (req, res) => {
    res.render('products', { title: 'Produk' });
  });
  
  router.get('/api/products', (req, res) => {
    fetch('http://localhost:3000/api/products')
      .then(response => response.json())
      .then(data => res.json(data))
      .catch(error => res.status(500).json({ error: 'Failed to fetch products' }));
  });
  
  router.post('/api/transactions', (req, res) => {
    fetch('http://localhost:3000/api/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req.body)
    })
    .then(response => response.json())
    .then(data => res.status(201).json(data))
    .catch(error => res.status(500).json({ error: 'Failed to create transaction' }));
  });
  
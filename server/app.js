require('newrelic');
const express = require('express');
const proxy = require('http-proxy-middleware');
const app = express();
const PORT = 5001;

// app.use(proxy('/api/seller', { target: 'http://localhost:5000' }));
app.use(proxy('/api/checkout', { target: 'http://localhost:1234' }));
// app.use(proxy('/products', { target: 'http://localhost:3000' }));


app.use(express.static('./public'));


app.listen(PORT, () => {
  console.log('Listening on port', PORT);
})





const express = require('express');

const app = express();

app.get('/', async (req, res) => {
  res.send('Seed Node');
});

app.listen(3000);

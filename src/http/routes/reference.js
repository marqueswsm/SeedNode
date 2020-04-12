const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(204).json({ seed: 'It is working well' });
});

module.exports = router;

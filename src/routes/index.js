const express = require('express');
const router = express.Router();

// Route de test initiale
router.get('/test', (req, res) => {
  res.json({ message: 'Route de test fonctionnelle !' });
});

module.exports = router;
const express = require('express');
const router = express.Router();

// @route   GET /
// @desc    Test route
// @access  Public
router.get('/', (req, res) => {
  res.send('Hello from the server!');
});

module.exports = router; 
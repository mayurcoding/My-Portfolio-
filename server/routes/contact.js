const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { submitContactForm } = require('../controllers/contactController');

// @route   POST api/contact
// @desc    Submit contact form, save to DB, and send email
// @access  Public
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('message', 'A message is required').not().isEmpty(),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  submitContactForm
);

module.exports = router; 
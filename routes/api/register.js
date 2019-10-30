const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');

// @route POST api/register
// @desc Register user
// @access Public
router.post(
  '/',
  [
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check('email', 'Invalid email').isEmail(),
    check('Password', 'Please enter a password').isLength({ min: 1 }) // TODO: create better password validation upon completion
  ],
  async (req, res) => {}
);

module.exports = router;

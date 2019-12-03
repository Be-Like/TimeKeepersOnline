const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Expense = require('../../models/Expense');

// @route POST api/expenses
// @desc Create an expense
// @access Private
router.post(
  '/',
  auth,
  [
    check('expense', 'Expense name is required!')
      .not()
      .isEmpty(),
    check('cost', 'Expense cost is required!')
      .not()
      .isEmpty(),
    check('job', 'Job is required!')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    // Check for errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // Destructure body
      const {
        expense,
        expenseType,
        cost,
        job,
        storeName,
        street,
        city,
        state,
        zipcode,
        country
      } = req.body;

      // create new expense object
      const newExpense = new Expense({
        user: req.user.id,
        expense,
        expenseType,
        cost,
        job,
        storeName,
        street,
        city,
        state,
        zipcode,
        country
      });

      const expenseInfo = await newExpense.save();

      res.json(expenseInfo);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  }
);

// @route GET api/expenses
// @desc Get all expenses
// @access Private
router.get('/', auth, async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.user.id });
    res.json(expenses);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;

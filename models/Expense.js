const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExpenseSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  expense: {
    type: String,
    required: true
  },
  expenseType: {
    type: String,
    default: 'Other'
  },
  cost: {
    type: Number,
    required: true
  },
  job: {
    type: Schema.Types.ObjectId,
    ref: 'jobs',
    required: true
  },
  expenseDate: {
    type: Date,
    default: Date.now
  },
  storeName: {
    type: String,
    default: null
  },
  street: {
    type: String,
    default: null
  },
  city: {
    type: String,
    default: null
  },
  state: {
    type: String,
    default: null
  },
  zipcode: {
    type: Number,
    default: null
  },
  country: {
    type: String,
    default: null
  }
});

module.exports = Expense = mongoose.model('expense', ExpenseSchema);

import axios from 'axios';
import {
  ADD_EXPENSE_FAIL,
  ADD_EXPENSE_SUCCESS,
  GET_EXPENSE_FAIL,
  GET_EXPENSE_SUCCESS
} from './types';

// Add expense
export const addExpense = formData => async dispatch => {
  const config = {
    header: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post('/api/expenses', formData, config);

    dispatch({
      type: ADD_EXPENSE_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: ADD_EXPENSE_FAIL,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};

// Get expense
export const getExpenses = () => async dispatch => {
  try {
    const res = await axios.get('/api/expenses');

    dispatch({
      type: GET_EXPENSE_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: GET_EXPENSE_FAIL,
      payload: { msg: error.response, status: error.response }
    });
  }
};

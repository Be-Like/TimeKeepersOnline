import {
  ADD_EXPENSE_SUCCESS,
  ADD_EXPENSE_FAIL,
  GET_EXPENSE_SUCCESS,
  GET_EXPENSE_FAIL
} from '../actions/types';

const initialState = {
  expenses: [],
  expense: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_EXPENSE_SUCCESS:
      return {
        ...state,
        expenses: payload,
        loading: false
      };
    case ADD_EXPENSE_SUCCESS:
      return {
        ...state,
        expenses: [payload, ...state.expenses],
        loading: false
      };
    case ADD_EXPENSE_FAIL:
    case GET_EXPENSE_FAIL:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}

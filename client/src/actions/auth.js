import axios from 'axios';
import { setAlert } from './alerts';
import { REGISTER_FAIL, REGISTER_SUCCESS } from './types';

// Register user
export const register = ({ name, email, password }) => async dispatch => {
  // Headers for db storage
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // Convert object to JSON object
  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post('/api/register', body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });

    // TODO: load the user
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: REGISTER_FAIL
    });
  }
};

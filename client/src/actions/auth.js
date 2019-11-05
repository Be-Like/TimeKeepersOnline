import axios from 'axios';
import { setAlert, removeAllAlerts } from './alerts';
import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  AUTH_ERROR,
  AUTH_SUCCESS,
  USER_LOADED
} from './types';
import setAuthToken from '../utils/setAuthToken';

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

    dispatch(removeAllAlerts());

    dispatch(loadUser());
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

// Load user
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('/api/login');

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

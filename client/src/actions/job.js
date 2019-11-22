import axios from 'axios';

import {
  ADD_JOB_FAIL,
  ADD_JOB_SUCCESS,
  GET_JOB_FAIL,
  GET_JOB_SUCCESS
} from './types';

// Get jobs
export const getJobs = () => async dispatch => {
  try {
    const res = await axios.get('/api/jobs');

    dispatch({
      type: GET_JOB_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: GET_JOB_FAIL,
      payload: { msg: error.response, status: error.response }
    });
  }
};

// Add Job
export const addJob = formData => async dispatch => {
  const config = {
    header: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post('/api/jobs', formData, config);

    dispatch({
      type: ADD_JOB_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: ADD_JOB_FAIL,
      payload: {
        msg: error.response.statusText,
        status: error.response.status
      }
    });
  }
};

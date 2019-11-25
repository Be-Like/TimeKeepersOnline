import axios from 'axios';

import {
  ADD_JOB_FAIL,
  ADD_JOB_SUCCESS,
  GET_JOB_FAIL,
  GET_JOB_SUCCESS,
  DELETE_JOB_FAIL,
  DELETE_JOB_SUCCESS,
  UPDATE_JOB_FAIL,
  UPDATE_JOB_SUCCESS
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

// Edit Job
export const updateJob = (jobId, formData) => async dispatch => {
  const config = {
    header: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.put(`/api/jobs/${jobId}`, formData, config);

    const data = res.data;

    dispatch({
      type: UPDATE_JOB_SUCCESS,
      payload: {
        jobId,
        data
      }
    });
  } catch (error) {
    dispatch({
      type: UPDATE_JOB_FAIL,
      payload: { msg: 'Update failed' }
    });
  }
};

// Delete Job
export const deleteJob = jobId => async dispatch => {
  try {
    await axios.delete(`/api/jobs/${jobId}`);

    dispatch({
      type: DELETE_JOB_SUCCESS,
      payload: jobId
    });
  } catch (error) {
    dispatch({
      type: DELETE_JOB_FAIL,
      payload: { msg: 'Delete error', status: 'Lame error' }
    });
  }
};

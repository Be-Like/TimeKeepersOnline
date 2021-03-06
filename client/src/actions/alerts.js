import uuid from 'uuid';
import { SET_ALERT, REMOVE_ALERT, REMOVE_ALL_ALERT } from './types';

export const setAlert = (msg, alertType) => dispatch => {
  const id = uuid.v4();

  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });
};

export const removeAlert = alertId => dispatch => {
  dispatch({
    type: REMOVE_ALERT,
    payload: alertId
  });
};

export const removeAllAlerts = () => dispatch => {
  dispatch({
    type: REMOVE_ALL_ALERT
  });
};

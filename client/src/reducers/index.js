import { combineReducers } from 'redux';
import alerts from './alerts';
import auth from './auth';
import job from './job';
import expense from './expense';

export default combineReducers({
  alerts,
  auth,
  job,
  expense
});

import { combineReducers } from 'redux';
import alerts from './alerts';
import auth from './auth';
import job from './job';

export default combineReducers({
  alerts,
  auth,
  job
});

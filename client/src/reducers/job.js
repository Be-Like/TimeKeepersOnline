import { ADD_JOB_SUCCESS, ADD_JOB_FAIL } from '../actions/types';

const initialState = {
  jobs: [],
  job: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_JOB_SUCCESS:
      return {
        ...state,
        jobs: [payload, ...state.jobs],
        loading: false
      };
    case ADD_JOB_FAIL:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}

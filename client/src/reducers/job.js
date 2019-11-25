import {
  ADD_JOB_SUCCESS,
  ADD_JOB_FAIL,
  GET_JOB_SUCCESS,
  GET_JOB_FAIL,
  DELETE_JOB_FAIL,
  DELETE_JOB_SUCCESS,
  UPDATE_JOB_SUCCESS,
  UPDATE_JOB_FAIL
} from '../actions/types';

const initialState = {
  jobs: [],
  job: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_JOB_SUCCESS:
      return {
        ...state,
        jobs: payload,
        loading: false
      };
    case ADD_JOB_SUCCESS:
      return {
        ...state,
        jobs: [payload, ...state.jobs],
        loading: false
      };
    case UPDATE_JOB_SUCCESS:
      return {
        ...state,
        jobs: state.jobs.map(job =>
          job._id === payload.jobId
            ? {
                ...job,
                company: payload.data.company,
                jobTitle: payload.data.jobTitle,
                pay: payload.data.pay,
                payPeriod: payload.data.payPeriod,
                street: payload.data.street,
                city: payload.data.city,
                state: payload.data.state,
                zipcode: payload.data.zipcode,
                country: payload.data.country,
                phoneNumber: payload.data.phoneNumber,
                email: payload.data.email,
                website: payload.data.website,
                federalIncomeTax: payload.data.federalIncomeTax,
                stateIncomeTax: payload.data.stateIncomeTax,
                socialSecurity: payload.data.socialSecurity,
                medicare: payload.data.medicare,
                individualRetirement: payload.data.individualRetirement,
                otherWithholdings: payload.data.otherWithholdings
              }
            : job
        ),
        loading: false
      };
    case DELETE_JOB_SUCCESS:
      return {
        ...state,
        jobs: state.jobs.filter(job => job._id !== payload),
        loading: false
      };
    case GET_JOB_FAIL:
    case ADD_JOB_FAIL:
    case UPDATE_JOB_FAIL:
    case DELETE_JOB_FAIL:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}

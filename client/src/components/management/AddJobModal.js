import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alerts';
import { addJob } from '../../actions/job';

import '../../stylesheet/management/addJobModal.css';

const AddJobModal = ({ show, close, addJob, setAlert }) => {
  const [formData, setFormData] = useState({
    company: '',
    jobTitle: '',
    pay: '',
    payPeriod: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phoneNumber: '',
    email: '',
    website: '',
    federalIncomeTax: '',
    stateIncomeTax: '',
    socialSecurity: '',
    medicare: '',
    individualRetirement: '',
    otherWithholdings: ''
  });

  const {
    company,
    jobTitle,
    pay,
    payPeriod,
    street,
    city,
    state,
    zipcode,
    country,
    phoneNumber,
    email,
    website,
    federalIncomeTax,
    stateIncomeTax,
    socialSecurity,
    medicare,
    individualRetirement,
    otherWithholdings
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async submitForm => {
    submitForm.preventDefault();
    try {
      await addJob(formData);

      // TODO: Figure out how to close the modal after submission.
    } catch (error) {
      setAlert('Something went wrong', 'danger');
    }
    console.log(formData);
  };

  return (
    <Fragment>
      <div className='modal-dialog ' role='document'>
        <div className='modal-content'>
          <form onSubmit={submitForm => onSubmit(submitForm)}>
            <div className='modal-header'>
              <h5 className='modal-title'>Add Job</h5>
              <button
                type='button'
                className='close'
                onClick={close}
                aria-label='Close'
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body custom-modal-body'>
              <div className='form-group'>
                <label htmlFor='jobInformation'>Job Information</label>
                <input
                  type='text'
                  id='jobInformation'
                  className='form-control custom-modal-input'
                  placeholder='Company'
                  name='company'
                  value={company}
                  onChange={e => onChange(e)}
                  required
                />
                <input
                  type='text'
                  id='jobInformation'
                  className='form-control custom-modal-input'
                  placeholder='Job Title'
                  name='jobTitle'
                  value={jobTitle}
                  onChange={e => onChange(e)}
                  required
                />
                <div className='form-inline'>
                  <input
                    type='number'
                    id='jobInformation'
                    className='form-control col-6 custom-modal-input'
                    placeholder='Pay/Pay Rate'
                    name='pay'
                    value={pay}
                    onChange={e => onChange(e)}
                    required
                  />
                  <select
                    id='jobInformation'
                    className='form-control col-5 ml-auto'
                    name='payPeriod'
                    value={payPeriod}
                    onChange={e => onChange(e)}
                    required
                  >
                    <option value='' selected>
                      Select pay period
                    </option>
                    <option value='Weekly'>Weekly</option>
                    <option value='Bi-Weekly'>Bi-Weekly</option>
                    <option value='Bi-Monthly'>Bi-Monthly</option>
                    <option value='Monthly'>Monthly</option>
                    <option value='Quarterly'>Quarterly</option>
                    <option value='Semi-Annually'>Semi-Annually</option>
                    <option value='Annually'>Annually</option>
                  </select>
                </div>
              </div>
              <div className='form-group'>
                <label htmlFor='addressInformation'>Address</label>
                <input
                  type='text'
                  id='addressInformation'
                  className='form-control custom-modal-input'
                  placeholder='Street Address'
                  name='street'
                  value={street}
                  onChange={e => onChange(e)}
                />
                <div className='form-inline'>
                  <input
                    type='text'
                    id='addressInformation'
                    className='form-control col-6 custom-modal-input'
                    placeholder='City'
                    name='city'
                    value={city}
                    onChange={e => onChange(e)}
                  />
                  <select
                    id='addressInformation'
                    className='form-control col-5 ml-auto'
                    name='state'
                    value={state}
                    onChange={e => onChange(e)}
                  >
                    <option value='' selected>
                      Select State
                    </option>
                  </select>
                </div>
                <div className='form-inline'>
                  <input
                    type='text'
                    id='addressInformation'
                    className='form-control col-4 custom-modal-input'
                    placeholder='Zip Code'
                    name='zipcode'
                    value={zipcode}
                    onChange={e => onChange(e)}
                  />
                  <select
                    id='addressInformation'
                    className='form-control col-7 ml-auto'
                    name='country'
                    value={country}
                    onChange={e => onChange(e)}
                  >
                    <option value='' selected>
                      Select Country
                    </option>
                  </select>
                </div>
              </div>
              <div className='form-group'>
                <label htmlFor='contactInformation'>Contact Information</label>
                <div className='form-inline'>
                  <input
                    type='tel'
                    id='contactInformation'
                    className='form-control col custom-modal-input'
                    placeholder='Phone Number'
                    name='phoneNumber'
                    value={phoneNumber}
                    onChange={e => onChange(e)}
                  />
                  <input
                    type='email'
                    id='contactInformation'
                    className='form-control col custom-modal-input'
                    placeholder='Email'
                    name='email'
                    value={email}
                    onChange={e => onChange(e)}
                  />
                  <input
                    type='url'
                    id='contactInformation'
                    className='form-control col custom-modal-input'
                    placeholder='Website'
                    name='website'
                    value={website}
                    onChange={e => onChange(e)}
                  />
                </div>
              </div>
              <div className='form-group'>
                <label htmlFor='taxInformation'>
                  Taxes and Other Withholdings
                </label>
                <div className='form-inline'>
                  <p className='col custom-modal-p'>Federal Income Tax:</p>
                  <input
                    type='number'
                    id='taxInformation'
                    className='form-control col custom-modal-input'
                    name='federalIncomeTax'
                    value={federalIncomeTax}
                    onChange={e => onChange(e)}
                  />
                </div>
                <div className='form-inline'>
                  <p className='col custom-modal-p'>State Income Tax:</p>
                  <input
                    type='number'
                    id='taxInformation'
                    className='form-control col custom-modal-input'
                    name='stateIncomeTax'
                    value={stateIncomeTax}
                    onChange={e => onChange(e)}
                  />
                </div>
                <div className='form-inline'>
                  <p className='col custom-modal-p'>Social Security:</p>
                  <input
                    type='number'
                    id='taxInformation'
                    className='form-control col custom-modal-input'
                    name='socialSecurity'
                    value={socialSecurity}
                    onChange={e => onChange(e)}
                  />
                </div>
                <div className='form-inline'>
                  <p className='col custom-modal-p'>Medicare:</p>
                  <input
                    type='number'
                    id='taxInformation'
                    className='form-control col custom-modal-input'
                    name='medicare'
                    value={medicare}
                    onChange={e => onChange(e)}
                  />
                </div>
                <div className='form-inline'>
                  <p className='col custom-modal-p'>Individual Retirement:</p>
                  <input
                    type='number'
                    id='taxInformation'
                    className='form-control col custom-modal-input'
                    name='individualRetirement'
                    value={individualRetirement}
                    onChange={e => onChange(e)}
                  />
                </div>
                <div className='form-inline'>
                  <p className='col custom-modal-p'>Other Withholdings:</p>
                  <input
                    type='number'
                    id='taxInformation'
                    className='form-control col custom-modal-input'
                    name='otherWithholdings'
                    value={otherWithholdings}
                    onChange={e => onChange(e)}
                  />
                </div>
              </div>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                onClick={close}
              >
                Close
              </button>
              <button
                type='submit'
                className='btn btn-primary'
                onSubmit={submitForm => onSubmit(submitForm)}
              >
                Save changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

AddJobModal.propTypes = {
  addJob: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired
};

export default connect(null, { addJob, setAlert })(AddJobModal);

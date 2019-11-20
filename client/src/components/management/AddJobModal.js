import React from 'react';
import PropTypes from 'prop-types';

import '../../stylesheet/management/addJobModal.css';

const AddJobModal = ({ show, close }) => {
  return (
    <div className='modal-dialog ' role='document'>
      <div className='modal-content'>
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
        <div className='modal-body'>
          <form>
            <div className='form-group'>
              <label htmlFor='jobInformation'>Job Information</label>
              <input
                type='text'
                id='jobInformation'
                className='form-control'
                placeholder='Company'
              />
              <input
                type='text'
                id='jobInformation'
                className='form-control'
                placeholder='Job Title'
              />
              <div className='form-inline'>
                <input
                  type='number'
                  id='jobInformation'
                  className='form-control col-6'
                  placeholder='Pay/Pay Rate'
                />
                <select className='form-control col-5 ml-auto'>
                  <option>Weekly</option>
                  <option>Bi-Weekly</option>
                  <option>Bi-Monthly</option>
                  <option>Monthly</option>
                  <option>Quarterly</option>
                  <option>Semi-Annually</option>
                  <option>Annually</option>
                </select>
              </div>
            </div>
            <div className='form-group'>
              <label htmlFor='addressInformation'>Address</label>
              <input
                type='text'
                id='addressInformation'
                className='form-control'
                placeholder='Street Address'
              />
              <div className='form-inline'>
                <input
                  type='text'
                  id='addressInformation'
                  className='form-control col-6'
                  placeholder='City'
                />
                <select className='form-control col-5 ml-auto'></select>
              </div>
              <div className='form-inline'>
                <input
                  type='text'
                  id='addressInformation'
                  className='form-control col-4'
                  placeholder='Zip Code'
                />
                <select className='form-control col-7 ml-auto'></select>
              </div>
            </div>
            <div className='form-group'>
              <label htmlFor='contactInformation'>Contact Information</label>
              <div className='form-inline'>
                <input
                  type='tel'
                  id='contactInformation'
                  className='form-control col'
                  placeholder='Phone Number'
                />
                <input
                  type='email'
                  id='contactInformation'
                  className='form-control col'
                  placeholder='Email'
                />
                <input
                  type='url'
                  id='contactInformation'
                  className='form-control col'
                  placeholder='Website'
                />
              </div>
            </div>
            <div className='form-group'>
              <label htmlFor='taxInformation'>
                Taxes and Other Withholdings
              </label>
              <div className='form-inline'>
                <p className='col '>Federal Income Tax:</p>
                <input type='number' className='form-control col' />
              </div>
              <div className='form-inline'>
                <p className='col'>State Income Tax:</p>
                <input type='number' className='form-control col' />
              </div>
              <div className='form-inline'>
                <p className='col'>Social Security:</p>
                <input type='number' className='form-control col' />
              </div>
              <div className='form-inline'>
                <p className='col '>Medicare:</p>
                <input type='number' className='form-control col' />
              </div>
              <div className='form-inline'>
                <p className='col'>Individual Retirement:</p>
                <input type='number' className='form-control col' />
              </div>
              <div className='form-inline'>
                <p className='col'>Other Withholdings:</p>
                <input type='number' className='form-control col' />
              </div>
            </div>
          </form>
        </div>
        <div className='modal-footer'>
          <button type='button' className='btn btn-secondary' onClick={close}>
            Close
          </button>
          <button type='button' className='btn btn-primary'>
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
};

AddJobModal.propTypes = {};

export default AddJobModal;

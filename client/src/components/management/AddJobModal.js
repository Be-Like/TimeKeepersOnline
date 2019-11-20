import React from 'react';
import PropTypes from 'prop-types';

const AddJobModal = () => {
  return (
    <div className='modal-dialog' role='document'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h5 className='modal-title'>Modal title</h5>
          <button
            type='button'
            className='close'
            data-dismiss='modal'
            aria-label='Close'
          >
            <span aria-hidden='true'>&times;</span>
          </button>
        </div>
        <div className='modal-body'>
          <form>
            <div className='form-group'>
              <label for='jobInformation'>Job Information</label>
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
              <input
                type='text'
                id='jobInformation'
                className='form-control'
                placeholder='Pay/Pay Rate'
              />
            </div>
          </form>
        </div>
        <div className='modal-footer'>
          <button
            type='button'
            className='btn btn-secondary'
            data-dismiss='modal'
          >
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

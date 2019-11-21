import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import '../../stylesheet/management/management.css';
import AddJobModal from './AddJobModal';

const Management = props => {
  const [show, setShow] = useState(false);

  const showModal = async () => {
    await setShow(true);
    console.log(show);
  };

  const hideModal = async () => {
    await setShow(false);
    console.log(show);
  };

  return (
    <Fragment>
      <div className='container-fluid management-ignore-navbar'>
        {/* Separate side nav from page content */}
        <div className='row'>
          {/* Job List */}
          <div className='management-job-container'>
            <div className='management-side-bar-header'>
              <button
                className='btn btn-primary col management-side-bar-header-item'
                onClick={showModal}
              >
                Add New Job
              </button>
              <input
                className='form-control mr-sm-2 management-side-bar-header-item'
                type='search'
                placeholder='Search'
                aria-label='Search'
              ></input>
            </div>
            <div
              className='nav flex-column nav-pills management-job-list'
              id='v-pills-tab'
              role='tablist'
              aria-orientation='vertical'
            >
              <a
                className='nav-link active management-nav-link'
                id='v-pills-home-tab'
                data-toggle='pill'
                href='#v-pills-home'
                role='tab'
                aria-controls='v-pills-home'
                aria-selected='true'
              >
                Home
              </a>
              <a
                className='nav-link management-nav-link'
                id='v-pills-profile-tab'
                data-toggle='pill'
                href='#v-pills-profile'
                role='tab'
                aria-controls='v-pills-profile'
                aria-selected='false'
              >
                Profile
              </a>
              <a
                className='nav-link management-nav-link'
                id='v-pills-messages-tab'
                data-toggle='pill'
                href='#v-pills-messages'
                role='tab'
                aria-controls='v-pills-messages'
                aria-selected='false'
              >
                Messages
              </a>
              <a
                className='nav-link management-nav-link'
                id='v-pills-settings-tab'
                data-toggle='pill'
                href='#v-pills-settings'
                role='tab'
                aria-controls='v-pills-settings'
                aria-selected='false'
              >
                Settings
              </a>
            </div>
          </div>

          {/* Content */}
          <div className='management-content'>
            {/* {this.state.show && <AddJobModal />} */}
            {show && (
              <div className='custom-modal'>
                <AddJobModal show={show} close={hideModal} />
              </div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Management.propTypes = {};

export default Management;

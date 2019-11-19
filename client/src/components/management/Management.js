import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import '../../stylesheet/management/management.css';

function Management(props) {
  return (
    <Fragment>
      <div className='job-container'>
        <input
          class='form-control mr-sm-2'
          type='search'
          placeholder='Search'
          aria-label='Search'
        ></input>
        <div
          class='nav flex-column nav-pills job-list'
          id='v-pills-tab'
          role='tablist'
          aria-orientation='vertical'
        >
          <a
            class='nav-link active'
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
            class='nav-link'
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
            class='nav-link'
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
            class='nav-link'
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
    </Fragment>
  );
}

Management.propTypes = {};

export default Management;

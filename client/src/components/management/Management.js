import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import '../../stylesheet/management/management.css';
import AddJobModal from './AddJobModal';

export default class Management extends Component {
  static propTypes = {};

  state = { show: false };

  showModal = async () => {
    await this.setState({ show: true });
    console.log(this.state);
  };

  hideModal = async () => {
    await this.setState({ show: false });
    console.log(this.state);
  };

  render() {
    return (
      <Fragment>
        <div className='container-fluid ignore-navbar'>
          {/* Separate side nav from page content */}
          <div className='row'>
            {/* Job List */}
            <div className='job-container'>
              <div className='side-bar-header'>
                <button
                  className='btn btn-primary col side-bar-header-item'
                  onClick={this.showModal}
                >
                  Add New Job
                </button>
                <input
                  className='form-control mr-sm-2 side-bar-header-item'
                  type='search'
                  placeholder='Search'
                  aria-label='Search'
                ></input>
              </div>
              <div
                className='nav flex-column nav-pills job-list'
                id='v-pills-tab'
                role='tablist'
                aria-orientation='vertical'
              >
                <a
                  className='nav-link active'
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
                  className='nav-link'
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
                  className='nav-link'
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
                  className='nav-link'
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
            <div className='content'>
              {/* {this.state.show && <AddJobModal />} */}
              {this.state.show && (
                <div className='custom-modal'>
                  <AddJobModal show={this.state.show} close={this.hideModal} />
                </div>
              )}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

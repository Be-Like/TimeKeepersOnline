import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getJobs } from '../../actions/job';
import { connect } from 'react-redux';

import '../../stylesheet/management/management.css';
import AddJobModal from './AddJobModal';

const Management = ({ getJobs, job: { jobs, loading } }) => {
  useEffect(() => {
    getJobs();
  }, [getJobs]);

  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  const jobList = jobs.map(job => (
    <a
      className='nav-link management-nav-link'
      id='v-pills-home-tab'
      data-toggle='pill'
      href='#v-pills-home'
      role='tab'
      key={job._id}
      value={job}
      onClick={() => onSelectJob(job)}
    >
      {job.company}
    </a>
  ));

  // const [selectedJob, setSelectedJob] = useState(null);
  const [selectedJob, setSelectedJob] = useState({
    user: '',
    company: 'Test Company',
    jobTitle: 'Test Title',
    pay: 5,
    payPeriod: 'Weekly',
    street: 'Street',
    city: 'city',
    state: 'state',
    zipcode: 'zipcode',
    country: 'countr',
    phoneNumber: 'phone',
    email: 'ex@sc.com',
    website: 'https://github.com/Be-Like/',
    federalIncomeTax: 12,
    stateIncomeTax: 5,
    socialSecurity: 3,
    medicare: 2,
    individualRetirement: 10,
    otherWithholdings: 10
  });

  const onSelectJob = job => {
    console.log(job);
    setSelectedJob(job);
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
              {jobList}
            </div>
          </div>

          {/* Content */}
          <div className='management-content'>
            {/* {selectedJob.company} */}

            {selectedJob !== null ? (
              <div>
                <div className='row management-content-header'>
                  <h2 className='col-9'>{selectedJob.company}</h2>
                  <button className='btn btn-outline-primary col-1 ml-auto'>
                    <i className='material-icons'>edit</i>
                  </button>
                  <button className='btn btn-outline-danger col-1 ml-auto'>
                    <i className='material-icons' role='button'>
                      delete
                    </i>
                  </button>
                </div>
                <div className='management-content-info'>
                  <div className='row'>
                    <h4 className='col'>{selectedJob.jobTitle}</h4>
                  </div>
                  <div className='row'>
                    <label className='col' htmlFor='payInfo'>
                      Pay / Pay Rate
                    </label>
                  </div>
                </div>
              </div>
            ) : (
              <div className='management-job-not-selected'>
                <h4 className='management-job-not-selected-text'>
                  Select a job
                </h4>
              </div>
            )}

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

Management.propTypes = {
  getJobs: PropTypes.func.isRequired,
  job: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  job: state.job,
  auth: state.auth
});

export default connect(mapStateToProps, { getJobs })(Management);

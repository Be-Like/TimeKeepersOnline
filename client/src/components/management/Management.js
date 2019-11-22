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
    street: 'street',
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
  } = selectedJob;

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
            {selectedJob !== null ? (
              <div>
                <div className='row management-content-header'>
                  <h2 className='col-9'>{company}</h2>
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
                    <h4 className='col'>{jobTitle}</h4>
                  </div>
                  {/* Pay Info */}
                  <div className='row'>
                    <div className='col'>
                      <p>Pay / Pay Rate: {pay}</p>
                    </div>
                    <div className='col'>
                      <p>Pay Period: {payPeriod}</p>
                    </div>
                  </div>
                  {/* Address and Contact Info */}
                  <div className='row'>
                    {(street || city || state || zipcode || country) && (
                      <div className='col'>
                        <h5>Address</h5>
                        <p>{street}</p>
                        <p>
                          {city}, {state} {zipcode} {country}
                        </p>
                      </div>
                    )}
                    {(phoneNumber || email || website) && (
                      <div className='col'>
                        <h5>Contact Information</h5>
                        {phoneNumber && <p>Phone Number: {phoneNumber}</p>}
                        {email && <p>Email: {email}</p>}
                        {website && <p>website: {website}</p>}
                      </div>
                    )}
                  </div>
                  {/* Tax Information */}
                  <div className='row'>
                    {(federalIncomeTax ||
                      stateIncomeTax ||
                      socialSecurity ||
                      socialSecurity ||
                      medicare ||
                      individualRetirement ||
                      otherWithholdings) && (
                      <div className='col'>
                        <h5>Taxes and Other Withholdings</h5>
                        {federalIncomeTax && (
                          <p>Federal Income Tax: {federalIncomeTax}</p>
                        )}
                        {stateIncomeTax && (
                          <p>State Income Tax: {stateIncomeTax}</p>
                        )}
                        {socialSecurity && (
                          <p>Social Security: {socialSecurity}</p>
                        )}
                        {medicare && <p>Medicare: {medicare}</p>}
                        {individualRetirement && (
                          <p>Individual Retirement: {individualRetirement}</p>
                        )}
                        {otherWithholdings && (
                          <p>Other Withholdings: {otherWithholdings}</p>
                        )}
                      </div>
                    )}
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

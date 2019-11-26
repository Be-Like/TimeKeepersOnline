import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getJobs, deleteJob } from '../../actions/job';
import { connect } from 'react-redux';

import '../../stylesheet/management/management.css';
import AddJobModal from './AddJobModal';

const Management = ({ getJobs, deleteJob, job: { jobs, loading } }) => {
  useEffect(() => {
    getJobs();
  }, [getJobs]);

  const [show, setShow] = useState(false);
  const [isAdding, setIsAdding] = useState(true);
  const blankJob = {
    user: '',
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
  };

  const [selectedJob, setSelectedJob] = useState(blankJob);
  const [defaultData, setDefaultData] = useState(blankJob);

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

  const showModal = isAdd => {
    if (isAdd) {
      setDefaultData(blankJob);
    } else {
      setIsAdding(false);
      setDefaultData(selectedJob);
    }

    setShow(true);
  };

  const hideModal = () => {
    setIsAdding(true);
    setShow(false);
    // setSelectedJob(blankJob);
  };

  const onSubmitted = job => {
    setSelectedJob(job);
  };

  const deleteSelectedJob = async jobId => {
    await deleteJob(jobId);

    setSelectedJob(blankJob);
  };

  const jobList = jobs.map(job => (
    <a
      className={
        company === job.company &&
        jobTitle === job.jobTitle &&
        pay.toString() === job.pay.toString() &&
        payPeriod === job.payPeriod
          ? 'nav-link management-nav-link active show'
          : 'nav-link management-nav-link'
      }
      id='v-pills-home-tab'
      data-toggle='pill'
      href={'#' + job.company}
      role='tab'
      key={job._id}
      value={job}
      aria-selected={
        company === job.company &&
        jobTitle === job.jobTitle &&
        pay.toString() === job.pay.toString() &&
        payPeriod === job.payPeriod
          ? true
          : false
      }
      onClick={() => onSelectJob(job)}
    >
      {job.company}
    </a>
  ));

  const onSelectJob = job => {
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
                onClick={() => showModal(true)}
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
            {(company && jobTitle && pay && payPeriod) !== '' ? (
              <div>
                <div className='row management-content-header'>
                  <h2 className='col-9'>{company}</h2>
                  <button
                    className='btn btn-outline-primary col-1 ml-auto'
                    onClick={() => showModal(false)}
                  >
                    <i className='material-icons'>edit</i>
                  </button>
                  <button
                    className='btn btn-outline-danger col-1 ml-auto'
                    onClick={() => deleteSelectedJob(selectedJob._id)}
                  >
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
                        {website && (
                          <p>
                            website: <a href={website}>{website}</a>
                          </p>
                        )}
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
                <AddJobModal
                  defaultFormData={defaultData}
                  isAdding={isAdding}
                  onSubmitted={onSubmitted}
                  close={hideModal}
                />
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
  deleteJob: PropTypes.func.isRequired,
  job: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  job: state.job,
  auth: state.auth
});

export default connect(mapStateToProps, { getJobs, deleteJob })(Management);

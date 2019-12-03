import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import Moment from 'react-moment';

import Calendar from './Calendar';
import '../../stylesheet/calendar/calendarPage.css';
import ExpenseEntry from '../modals/ExpenseEntry';

const CalendarPage = props => {
  const [dateSelected, setDateSelected] = useState(new moment());
  const [showExpense, setShowExpense] = useState(false);
  const [isAdding, setIsAdding] = useState(true);
  const blankJob = {
    expense: '',
    expenseType: '',
    cost: '',
    jobSelection: '',
    storeName: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: ''
  };

  const [defaultData, setDefaultData] = useState(blankJob);

  const selectedDate = date => {
    setDateSelected(date);
  };

  const showExpenseModal = () => {
    // if (isAdd) {
    //   setDefaultData(blankJob);
    // } else {
    //   setIsAdding(false);
    //   setDefaultData(selectedJob);
    // }

    setShowExpense(true);
  };

  const hideExpenseModal = () => {
    setIsAdding(true);
    setShowExpense(false);
  };

  // const onSubmitted = job => {
  //   setSelectedJob(job);
  // };

  return (
    <Fragment>
      <div className='container'>
        <div className='row'>
          {/* Calendar */}
          <div className='col-6 calendar-calendar-height'>
            <Calendar date={selectedDate} />
          </div>
          {/* Content */}
          <div className='col-6'>
            {/* Selected Info Content */}
            <div className='calendar-selected-info'>
              <h4>
                Hello <Moment date={dateSelected} />
              </h4>
            </div>
            {/* Calendar Day Info */}
            <div className='calendar-day-info'>
              <div className='row calendar-day-header'>
                <h4 className='col-9'>Day</h4>
                <button
                  className='btn calendar-center-button-content btn-outline-success col-1 ml-auto'
                  onClick={() => showExpenseModal()}
                >
                  <i className='material-icons'>attach_money</i>
                </button>
                <button className='btn calendar-center-button-content btn-outline-primary col-1 ml-auto'>
                  <i className='material-icons'>post_add</i>
                </button>
              </div>
            </div>

            {/* Show Modals */}
            {showExpense && (
              <div className='custom-modal'>
                <ExpenseEntry
                  defaultFormData={defaultData}
                  isAdding={isAdding}
                  // onSubmitted={onSubmitted}
                  close={hideExpenseModal}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

CalendarPage.propTypes = {};

const mapStateToProps = state => ({
  isAuthenticated: PropTypes.bool.isRequired
});

export default connect(mapStateToProps)(CalendarPage);

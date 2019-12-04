import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import Moment from 'react-moment';
import { getExpenses } from '../../actions/expense';

import Calendar from './Calendar';
import '../../stylesheet/calendar/calendarPage.css';
import ExpenseEntry from '../modals/ExpenseEntry';

const CalendarPage = ({ getExpenses, expense: { _id, expenses } }) => {
  useEffect(() => {
    getExpenses();
  }, [getExpenses]);

  const [dateSelected, setDateSelected] = useState(new moment());
  const [selectedDateExpenses, setSelectedDateExpenses] = useState([]);
  const [showExpense, setShowExpense] = useState(false);
  const [isAdding, setIsAdding] = useState(true);
  const blankExpense = {
    _id: '',
    expense: '',
    expenseType: '',
    cost: '',
    job: '',
    storeName: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: ''
  };

  const [defaultData, setDefaultData] = useState(blankExpense);

  const eventList = expenses.map(list => (
    <a
      className={
        selectedDateExpenses._id === list._id
          ? 'nav-link management-nav-link active show'
          : 'nav-link management-nav-link'
      }
      id='v-pills-home-tab'
      data-toggle='pill'
      href={'#' + list.expense}
      role='tab'
      key={list._id}
      value={list}
      aria-selected={selectedDateExpenses._id === list._id ? true : false}
      onClick={() => onSelectEvent(list)}
    >
      {list.expense}
    </a>
  ));

  const onSelectEvent = passedEvent => {
    setSelectedDateExpenses(passedEvent);
    console.log('passedEvent', eventList);
  };

  const selectedDate = date => {
    setDateSelected(date);
    // eventList.filter;
    // Set the selectedDateExpenses list
    // Set the selectedDateJobEntries list
  };

  const showExpenseModal = () => {
    // if (isAdd) {
    //   setDefaultData(blankExpense);
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

  const test = () => {
    // console.log(isAuthenticated);
    console.log(selectedDateExpenses._id);
  };

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
              {/* Calendar Day Header */}
              <div className='row calendar-day-header'>
                <h4 className='col-9'>Day</h4>
                <button
                  className='btn calendar-center-button-content btn-outline-success col-1 ml-auto'
                  onClick={() => showExpenseModal()}
                >
                  <i className='material-icons'>attach_money</i>
                </button>
                <button
                  className='btn calendar-center-button-content btn-outline-primary col-1 ml-auto'
                  onClick={() => test()}
                >
                  <i className='material-icons'>post_add</i>
                </button>
              </div>
              {/* Calendar Day Content */}
              <div className='calendar-day-content'>
                <div className='row'>
                  <div
                    className='col-6 nav flex-column nav-pills'
                    id='v-pills-tab'
                    role='tablist'
                    aria-orientation='vertical'
                  >
                    <h5 className='calendar-day-subheader'>Expenses</h5>
                    <div className='calendar-day-content-list'>{eventList}</div>
                  </div>
                  <div
                    className='col-6 nav flex-column nav-pills'
                    id='v-pills-tab'
                    role='tablist'
                    aria-orientation='vertical'
                  >
                    <h5 className='calendar-day-subheader'>Job Entries</h5>
                    <div className='calendar-day-content-list'>
                      {selectedDateExpenses}
                    </div>
                  </div>
                </div>
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

CalendarPage.propTypes = {
  getExpenses: PropTypes.func.isRequired,
  expense: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  expense: state.expense,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { getExpenses })(CalendarPage);

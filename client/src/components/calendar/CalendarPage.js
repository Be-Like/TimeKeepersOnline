import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import Moment from 'react-moment';

import Calendar from './Calendar';
import '../../stylesheet/calendar/calendarPage.css';

const CalendarPage = props => {
  const [dateSelected, setDateSelected] = useState(new moment());

  const selectedDate = date => {
    setDateSelected(date);
  };

  return (
    <Fragment>
      <div className='container'>
        <div className='row'>
          <div className='col-6 calendar-calendar-height'>
            <Calendar date={selectedDate} />
          </div>
          <div className='col-6'>
            <div className='calendar-selected-info'>
              <h4>
                Hello <Moment date={dateSelected} />
              </h4>
            </div>
            <div className='calendar-day-info'>
              <div className='row test'>
                <h4 className='col'>Day</h4>
                <button className='btn calendar-center-button-content btn-outline-primary col ml-auto'>
                  <i className='material-icons'>edit</i> Add Job Entry
                </button>
                <button className='btn calendar-center-button-content btn-outline-primary col ml-auto'>
                  <i className='material-icons'>edit</i> Add Expense
                </button>
              </div>
            </div>
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

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Calendar from './Calendar';

const CalendarPage = props => {
  return (
    <Fragment>
      <div className='container'>
        <div className='row'>
          <div className='col-6 calendar-calendar-height'>
            <h4>Hello Calendar</h4>
          </div>
          <div className='col-6 calendar-calendar-height'>
            <Calendar />
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

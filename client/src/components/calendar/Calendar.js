import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import '../../stylesheet/calendar/calendar.css';
import moment from 'moment';

const Calendar = props => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const nextMonth = () => {
    setCurrentMonth(moment.addMonths(currentMonth, 1));
  };
  const prevMonth = () => {
    setCurrentMonth(moment.subMonths(currentMonth, 1));
  };

  const renderHeader = () => {
    const dateFormat = 'MMMM YYYY';

    return (
      <div className='header row flex-middle'>
        <div className='col col-start'>
          <div className='icon' onClick={this.prevMonth}>
            chevron_left
          </div>
        </div>
        <div className='col col-center'>
          <span>{moment.format(currentMonth, dateFormat)}</span>
        </div>
        <div className='col col-end' onClick={this.nextMonth}>
          <div className='icon'>chevron_right</div>
        </div>
      </div>
    );
  };

  return (
    <div className='calendar'>
      <div>Header</div>
      {renderHeader}
      <div>Days</div>
      <div>Cells</div>
    </div>
  );
};

Calendar.propTypes = {};

export default Calendar;

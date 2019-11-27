import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';

import '../../stylesheet/calendar/calendar.css';

const Calendar = ({ date }) => {
  const [currentMonth, setCurrentMonth] = useState(new moment());
  const [selectedDate, setSelectedDate] = useState(new moment());

  const nextMonth = () => {
    setCurrentMonth(moment(currentMonth).add(1, 'month'));
  };
  const prevMonth = () => {
    setCurrentMonth(moment(currentMonth).subtract(1, 'month'));
  };

  const onDateClick = day => {
    setSelectedDate(day);
    date(day);
    console.log(day);
  };

  const RenderHeader = () => {
    const dateFormat = 'MMM YYYY';

    return (
      <div className='header row flex-middle'>
        <div className='col col-start'>
          <div className='icon' onClick={prevMonth}>
            chevron_left
          </div>
        </div>
        <div className='col col-center'>
          <Moment format={dateFormat}>{currentMonth}</Moment>
        </div>
        <div className='col col-end' onClick={nextMonth}>
          <div className='icon'>chevron_right</div>
        </div>
      </div>
    );
  };

  const RenderDays = () => {
    const days = moment.weekdaysShort();

    const dayList = days.map(day => (
      <div className='col col-center' key={day}>
        {day}
      </div>
    ));

    return <div className='days row'>{dayList}</div>;
  };

  const RenderCells = () => {
    const monthStart = moment(currentMonth).startOf('month');
    const monthEnd = moment(monthStart).endOf('month');
    const startDate = moment(monthStart).startOf('week');
    const endDate = moment(monthEnd).endOf('week');

    const dateFormat = 'D';
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = '';

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = moment(day).format(dateFormat);
        const cloneDay = day;

        days.push(
          <div
            className={`col cell ${
              moment(day).isBefore(monthStart) || moment(day).isAfter(monthEnd)
                ? 'disabled'
                : moment(day).isSame(selectedDate)
                ? 'selected'
                : ''
            }`}
            key={day}
            onClick={() => onDateClick(moment(cloneDay))}
          >
            <span className='number'>{formattedDate}</span>
            <span className='bg'>{formattedDate}</span>
          </div>
        );
        day = moment(day).add(1, 'day');
      }
      rows.push(
        <div className='row' key={day}>
          {days}
        </div>
      );
      days = [];
    }

    return <div className='body'>{rows}</div>;
  };

  return (
    <div className='calendar'>
      <RenderHeader />
      <RenderDays />
      <RenderCells />
    </div>
  );
};

Calendar.propTypes = {};

export default Calendar;

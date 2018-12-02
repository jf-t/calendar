import React, { Component } from 'react';

import { connect } from 'react-redux';

import DayViewComponent from './dayView';

class WeekCalendarComponent extends Component {
  constructor (props) {
    super (props);

    this.todaysDate = this.todaysDate.bind(this);
  }

  // Copied directly from dayView, need to make render util file soon
  todaysDate (stamp) {
    let date = (stamp ?  new Date(stamp) : new Date());

    let months = ['January', 'February', 'March', 'April', 'May', 'June',
                  'July', 'August', 'September', 'October', 'November', 'December'];

    let month = months[date.getMonth()];
    let year = date.getFullYear();
    let day = date.getDate();

    return [year, month, day];
  }

  renderWeek () {
    let today = this.todaysDate(),
        todayDate = new Date(today);

    let sunday = new Date(todayDate);
    sunday.setDate(todayDate.getDate() - todayDate.getDay());

    let week = [sunday];

    let day;
    let idx = 1;
    while (idx <= 6) {
      day = new Date(sunday);
      day.setDate(sunday.getDate() + idx);

      week.push(day);
      day = null;

      idx += 1;
    }

    let weekStart = this.todaysDate(sunday);
    let weekEnd = this.todaysDate(week[6]);

    let months = ['January', 'February', 'March', 'April', 'May', 'June',
                  'July', 'August', 'September', 'October', 'November', 'December'];

    let weekDates = `${weekStart[1]} ${weekStart[2]}, ${weekStart[0]} -
                     ${weekEnd[1]} ${weekEnd[2]}, ${weekEnd[0]}`;

    let dayObjs = [
      <DayViewComponent />,
      <DayViewComponent />,
      <DayViewComponent />,
      <DayViewComponent />,
      <DayViewComponent />,
      <DayViewComponent />,
      <DayViewComponent />
    ];

    return {
      week: dayObjs,
      weekDates
    };
  }

  render () {
    let week = this.renderWeek();
    return (
      <div className="week">
        <h1>{ week.weekDates }</h1>

        <div className="flex">
          { week.week }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect() (WeekCalendarComponent);

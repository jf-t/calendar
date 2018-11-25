import React, { Component } from 'react';

import { connect } from 'react-redux';

// TODO: create array of days inside week objects for displaying in render functions
class MonthCalendarComponent extends Component {
  constructor (props) {
    super (props);

    this.state = {
      formattedDays: []
    };

    this.formatMonth = this.formatMonth.bind(this);

    this.renderDay = this.renderDay.bind(this);
    this.renderWeek = this.renderWeek.bind(this);
    this.renderMonth = this.renderMonth.bind(this);
  }

  componentDidMount () {
    this.formatMonth();
  }

  displayEvents () {
    this.calendars.forEach(calendar => {
      calendar.events.forEach(evt => {
        let startTime = new Date(evt.startTime);
        let endTime = new Date(evt.endTime);

        let dayDifference = endTime.getDate() - startTime.getDate() + 1;
        let days = [...Array(31).keys()].splice(startTime.getDate(), dayDifference);
      });
    });
  }

  formatMonth () {
    // In here i need to create a double array of day and week objects to be rendered

    let time = new Date();

    // get current month, week, day
    // loop through this.props.events for each day and set colors for each
    let currentMonth = time.getMonth(); // 0 - 11
    let currentDay = time.getDate(); // 1 - 31
    let dayOfWeek = time.getDay(); // 0 (sunday) - 6 (saturday)

    time.setDate(1);
    let monthFirstDay = time.getDay();
    let daysInFirstWeek = 7 - monthFirstDay;

    let firstWeek = [];
    for (let i of [...Array().keys()]) {
      firstWeek.push({day: i});
    };

    console.log(firstWeek);
  }

  renderDay (day) {
    return (
      <div className="day">
        { day }
      </div>
    );
  }

  renderWeek (week) {
    const days = week.map(day => {
      return this.renderDay(day);
    });

    return (
      <div className="week">
        { days }
      </div>
    );
  }

  renderMonth () {
    const weeks = this.state.formattedDays.forEach(week => {
      return this.renderWeek(week);
    });
  }

  render () {
    let calendar = 'loading...';
    if (this.state.formattedDays.length > 0) {
      calendar = this.renderMonth();
    }

    return (
      <div>
        { calendar }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  calendars: state.calendars.calendars
});

const mapDispatchToProps = dispatch => ({

});

export default connect() (MonthCalendarComponent);

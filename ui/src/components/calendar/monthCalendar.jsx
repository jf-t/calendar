import React, { Component } from 'react';

import { connect } from 'react-redux';

import { formatMonth } from '../../util/calendarUtil';

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
    this.props.formatMonth();
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
  formatMonth
});

export default connect() (MonthCalendarComponent);

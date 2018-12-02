import React, { Component } from 'react';

import { connect } from 'react-redux';

import { getCalendars } from '../../actions/userActions';

// TODO: there will be a lot of logic in this file, i might end up creating helper
//         files to display certain information:
//   1. create filters for switching between day, month, and week view
//   2. get calendar information
//   3. pass approprate props into subcomponents

import DayCalendarComponent from './dayCalendar';
import WeekCalendarComponent from './weekCalendar';
import MonthCalendarComponent from './monthCalendar';

class CalendarComponent extends Component {
  constructor (props) {
    super (props);

    // Filters: 1 = month, 2 = week, 3 = day
    // TODO: at some point this needs to be set in localStorage
    this.state = {
      filter: 3
    };

    this.switchFilter = this.switchFilter.bind(this);
    this.renderFilters = this.renderFilters.bind(this);
    this.displayCalendar = this.displayCalendar.bind(this);
  }

  componentDidMount () {
    this.props.getCalendars(this.props.userId);
  }

  switchFilter (evt, filter) {
    evt.preventDefault();

    this.setState({ filter });
  }

  renderFilters () {
    return (
      <div className="row">
        <a onClick={(evt) => this.switchFilter(evt, 1)}>Month</a>
        <a onClick={(evt) => this.switchFilter(evt, 2)}>Week</a>
        <a onClick={(evt) => this.switchFilter(evt, 3)}>Day</a>
      </div>
    );
  }

  displayCalendar () {
    switch(this.state.filter) {
      case 1:
        return (<MonthCalendarComponent />);
      case 2:
        return (<WeekCalendarComponent />);
      case 3:
        return (<DayCalendarComponent />);
    }
  }

  render () {
    console.log(this.props.calendars);
    const calendarFilters = this.renderFilters();

    const calendar = this.displayCalendar();

    return (
      <div>
        { calendarFilters }
        { calendar }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  calendars: state.calendar.calendars,
  userId: state.user.activeUser.id
});

const mapDispatchToProps = dispatch => ({
  getCalendars: (id) => dispatch(getCalendars(id))
});

export default connect(mapStateToProps, mapDispatchToProps) (CalendarComponent);

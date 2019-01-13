import React, { Component } from 'react';

import { connect } from 'react-redux';

import { getCalendars } from '../../actions/userActions';
import { changeFilter } from '../../actions/calendarActions';

import './calendar.scss';


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

    this.displayCalendar = this.displayCalendar.bind(this);
  }

  componentDidMount () {
    if (!this.props.filter) {
      this.props.changeFilter(3);
    }
    this.props.getCalendars(this.props.userId);
  }

  displayCalendar () {
    switch(this.props.filter) {
      case 1:
        return (<MonthCalendarComponent />);
      case 2:
        return (<WeekCalendarComponent />);
      case 3:
        return (<DayCalendarComponent />);
    }
  }

  render () {
    let calendar = 'loading...';
    if (this.props.calendars) {
      calendar = (
        <div className="calendar">
          { this.displayCalendar() }
        </div>
      );
    }

    return (
      <div className="calendarWrapper">
        { calendar }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  calendars: state.calendar.calendars,
  userId: state.user.activeUser.id,
  filter: state.calendar.currentFilter
});

const mapDispatchToProps = dispatch => ({
  getCalendars: (id) => dispatch(getCalendars(id)),
  changeFilter: (filter) => dispatch(changeFilter(filter))
});

export default connect(mapStateToProps, mapDispatchToProps) (CalendarComponent);

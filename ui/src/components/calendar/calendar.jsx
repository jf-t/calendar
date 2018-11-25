import React, { Component } from 'react';

import { connect } from 'react-redux';

import { getCalendarInfo } from '../../actions/calendarActions';

class CalendarComponent extends Component {
  constructor (props) {
    super (props);

    this.state = {
      calendar: props.activeCalendar
    };
  }
}

const mapStateToProps = state => ({
  activeCalendar: state.calendar.activeCalendar
});

const mapDispatchToProps = dispatch => ({
  getCalendar: (id) => dispatch(getCalendarInfo(id))
});

export default connect(mapStateToProps, mapDispatchToProps) (CalendarComponent);

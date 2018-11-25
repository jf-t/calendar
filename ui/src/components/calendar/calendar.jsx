import React, { Component } from 'react';

import { connect } from 'react-redux';

import { getCalendars } from '../../actions/userActions';

// TODO: there will be a lot of logic in this file, i might end up creating helper
//         files to display certain information:
//   1. create filters for switching between day, month, and week view
//   2. get calendar information
//   3. pass approprate props into subcomponents

class CalendarComponent extends Component {
  constructor (props) {
    super (props);
  }

  componentDidMount () {
    this.props.getCalendars(this.props.userId);
  }

  render () {
    return (
      <div>
        <h1>My Calendar</h1>
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

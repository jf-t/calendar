import React, { Component } from 'react';

import { connect } from 'react-redux';


class WeekCalendarComponent extends Component {
  constructor (props) {

  }

  render () {
    return (
      <div>
        <h1>Week Calendar</h1>
      </div>
    )
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect() (WeekCalendarComponent);

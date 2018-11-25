import React, { Component } from 'react';

import { connect } from 'react-redux';


class MonthCalendarComponent extends Component {
  constructor (props) {

  }

  render () {
    return (
      <div>
        <h1>Month Calendar</h1>
      </div>
    )
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect() (MonthCalendarComponent);

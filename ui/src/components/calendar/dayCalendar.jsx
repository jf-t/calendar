import React, { Component } from 'react';

import { connect } from 'react-redux';


class DayCalendarComponent extends Component {
  constructor (props) {
    super (props);
  }

  render () {
    return (
      <div>
        <h1>Day Calendar</h1>
      </div>
    )
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect() (DayCalendarComponent);

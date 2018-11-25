import React, { Component } from 'react';
import { connect } from 'react-redux';

import { CalendarComponent } from '../calendar/calendar';

class HomeComponent extends Component {
  render () {
    return (<div>Home Page!</div>);
  }
}

export default connect()(HomeComponent);

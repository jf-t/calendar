import React, { Component } from 'react';

import DayViewComponent from './dayView';

import { connect } from 'react-redux';

class DayCalendarComponent extends Component {
  constructor (props) {
    super (props);

    this.todaysDate = this.todaysDate.bind(this);
  }

  todaysDate () {
    let date = new Date();

    let months = ['January', 'February', 'March', 'April', 'May', 'June',
                  'July', 'August', 'September', 'October', 'November', 'December'];

    let month = months[date.getMonth()];
    let year = date.getFullYear();
    let day = date.getDate();

    return `${month} ${day}, ${year}`;
  }

  render () {
    let day = <DayViewComponent />

    let currentDay = this.todaysDate();
    return (
      <div className="day">
        <h1>{ currentDay }</h1>

        { day }
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect() (DayCalendarComponent);

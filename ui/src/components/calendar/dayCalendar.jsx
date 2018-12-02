import React, { Component } from 'react';

import { connect } from 'react-redux';


class DayCalendarComponent extends Component {
  constructor (props) {
    super (props);

    this.renderDay = this.renderDay.bind(this);
  }

  renderDay () {
    let hours = [];
    for (var i = 0; i < 24; i++) {
      let isAm = (Math.floor(i / 12) === 0) ? true : false;
      let formattedHour = ((i === 12) || (i === 0)) ? 12 : (i % 12);

      formattedHour += `:00${isAm ? 'AM' : 'PM'}`;

      let hour = (
        <div className="hour">
          <span className="hourIndication">
            { formattedHour }
          </span>
          <div className="hourBlock">

          </div>
        </div>
      );

      hours.push(hour);
    }

    return (
      <div className="dayContainer">
        { hours }
      </div>
    );
  }

  render () {
    let day = this.renderDay();
    return (
      <div>
        <h1>Day Calendar</h1>

        { day }
      </div>
    )
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect() (DayCalendarComponent);

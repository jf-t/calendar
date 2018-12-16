import React, { Component } from 'react';

import { connect } from 'react-redux';

import { formatMonth } from '../../util/calendarUtil';

// TODO: create array of days inside week objects for displaying in render functions
class MonthCalendarComponent extends Component {
  constructor (props) {
    super (props);

    this.state = {
      formattedMonth: []
    }

    this.renderDay = this.renderDay.bind(this);
    this.renderWeek = this.renderWeek.bind(this);
    this.renderMonth = this.renderMonth.bind(this);
  }

  componentDidMount () {
    this.setState({ formattedMonth: this.props.formatMonth(this.props.monthData) });
  }

  displayEvents (events) {
    let eventEls = [];

    // forEach is safe to use because this case does not need to break
    events.forEach(event => {
      eventEls.push(
        <div className="event">
          <span className="calendar-color">{ event.color }</span>
          <span className="calendar-time">{ event.time }</span>
          <span className="calendar-name">{ event.name }</span>
        </div>
      );
    });
  }


  renderDay (day) {
    let events = this.renderEvents(day.events);

    return (
      <div className="day">
        <h1 className={"day-number " + (day.current ? 'current' : '')}>
          { day.number }
        </h1>
        <div className="day-events">
          { events }
        </div>
      </div>
    );
  }

  renderWeek (week) {
    const days = week.map(this.renderDay);

    return (
      <div className="week">
        { days }
      </div>
    );
  }

  renderMonth (month) {
    const weeks = month.map(this.renderWeek);

    return (
      <div className="month">
        { weeks }
      </div>
    );
  }

  render () {
    let calendar = 'loading...';
    if (this.state.formattedMonth.length > 0) {
      calendar = this.renderMonth();
    }

    return (
      <div>
        { calendar }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  monthData: state.calendars
});

const mapDispatchToProps = dispatch => ({
  formatMonth
});

export default connect(mapStateToProps, mapDispatchToProps) (MonthCalendarComponent);

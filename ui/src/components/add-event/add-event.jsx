import React, { Component } from 'react';

import { connect } from 'react-redux';

import './add-event.scss';

class AddEventComponent extends Component {
  constructor (props) {
    super(props);

    this.createEvent = this.createEvent.bind(this);
    this.changeInput = this.changeInput.bind(this);
    this.displayCalendars = this.displayCalendars.bind(this);
  }

  createEvent () {
    console.log("create event send");
  }

  changeInput (name) {
    return (e) => {
      this.setState({ [name]: e.target.value });
    }
  }

  displayCalendars () {
    return (
      <div>
        <h1>Choose a Calendar</h1>
        <h2>Work Calendar</h2>
        <h2>Family Calendar</h2>
        <h2>Personal Calendar</h2>
      </div>
    );
  }

  render () {
    return (
      <div className="add-event-page">
        <div className="breadcrumbs">
          <h2>Add Event</h2>
        </div>

        <form onSubmit={this.createEvent}>
          <input type="text" onChange={this.changeInput('name')} placeholder="Event Name"></input>

          <div className="flex">
            <input type="text" onChange={this.changeInput('startDate')} placeholder="Start Date"></input>
            <input type="text" onChange={this.changeInput('endDate')} placeholder="End Date"></input>
          </div>

          <div className="calendars">
            { this.displayCalendars() }
          </div>

          <textarea onChange={this.changeInput('description')}></textarea>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});


export default connect () (AddEventComponent);

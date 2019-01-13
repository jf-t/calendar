import React, { Component } from 'react';

import Layout from '../layout/layout';

import { connect } from 'react-redux';

import { createEvent } from '../../actions/eventActions';

import './add-event.scss';

class AddEventComponent extends Component {
  constructor (props) {
    super(props);

    this.state = {
      name: '',
      startDate: '',
      endDate: '',
      calendarId: null
    };

    this.createEvent = this.createEvent.bind(this);
    this.chooseCalendar = this.chooseCalendar.bind(this);
    this.changeInput = this.changeInput.bind(this);
    this.displayCalendars = this.displayCalendars.bind(this);
  }

  changeInput (name) {
    return (e) => {
      this.setState({ [name]: e.target.value });
    }
  }

  chooseCalendar (id) {
    this.setState({ calendarId: id });
  }

  displayCalendars () {
    // Filter will work based on calendar ID from backend
    return (
      <div>
        <h1>Choose a Calendar</h1>
        <h2><a onClick={() => this.chooseCalendar(1)}>Work Calendar</a></h2>
        <h2><a onClick={() => this.chooseCalendar(2)}>Family Calendar</a></h2>
        <h2><a onClick={() => this.chooseCalendar(3)}>Personal Calendar</a></h2>
      </div>
    );
  }

  createEvent (e) {
    e.preventDefault();

    console.log("createEvent");
    console.log(this.state);

    this.props.createEvent(this.state);
  }

  render () {
    if (this.props.eventInfo) {
      this.props.history.push('/');
    }

    // Breadcrumbs can be in components util
    return (
      <Layout location={this.props.location}
              history={this.props.history}>
        <div className="add-event-page">
          <div className="breadcrumbs">
            <h2>Add Event</h2>
          </div>

          <form onSubmit={this.createEvent}>
            <input type="text"
                   onChange={this.changeInput('name')}
                   placeholder="Event Name"></input>

            <div className="flex">
              <input type="text"
                     onChange={this.changeInput('startDate')}
                     placeholder="Start Date"></input>

              <input type="text"
                     onChange={this.changeInput('endDate')}
                     placeholder="End Date"></input>
            </div>

            <div className="calendars">
              { this.displayCalendars() }
            </div>

            <textarea onChange={this.changeInput('description')}></textarea>

            <div className="create-button">
              <input type="submit" value="Create" />
            </div>
          </form>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  eventInfo: state.event.activeEvent,
  error: state.event.error
});

const mapDispatchToProps = dispatch => ({
  createEvent: (event) => dispatch(createEvent(event))
});


export default connect (mapStateToProps, mapDispatchToProps) (AddEventComponent);

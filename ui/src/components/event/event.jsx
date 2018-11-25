import React, { Component } from 'react';

import { connect } from 'react-redux';

import { getEvent, editEvent, deleteEvent } from '../../actions/eventActions';

class EventComponent extends Component {
  constructor (props) {
    super(props);

    console.log(props);

    this.state = {
      eventId: 1,
      event: props.event.activeEvent };
  }

  componentWillMount () {
    this.props.getEvent(this.state.eventId);
  }

  render () {
    if (this.state.event) {
      return (<div>
                <h1>{ this.state.event.name }</h1>
                <h2> { this.state.event.calendarId }</h2>
              </div>);
    } else {
      return (<div>
                <h1>No event set</h1>
              </div>);
    }
  }
}

const mapStateToProps = state => ({
  event: state.event
});

const mapDispatchToProps = dispatch => ({
  getEvent: (id) => dispatch(getEvent(id)),
  editEvent: (id, ev) => dispatch(editEvent(id, ev)),
  deleteEvent: (id) => dispatch(deleteEvent(id))
});

export default connect(mapStateToProps, mapDispatchToProps) (EventComponent);

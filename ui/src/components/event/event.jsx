import React, { Component } from 'react';

import { connect } from 'react-redux';

import { getEvent, editEvent, deleteEvent } from '../../actions/eventActions';

class EventComponent extends Component {
  constructor (props) {
    super(props);

    this.state = { eventId: (props.match.params.id ?
                             parseInt(props.match.params.id) :
                             null) };
  }

  componentDidMount () {
    this.props.getEvent(this.state.eventId);
  }

  render () {
    console.log(this.props);
    let activeEvent = this.props.event.activeEvent;

    console.log(activeEvent);

    if (activeEvent) {
      return (<div>
                <h1>{ activeEvent.name }</h1>
                <h2> { activeEvent.calendarId }</h2>
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

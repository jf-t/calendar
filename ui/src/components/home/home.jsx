import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import CalendarComponent from '../calendar/calendar';

class HomeComponent extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    if (this.props.user) {
      return (<CalendarComponent
                location={this.props.location}
                history={this.props.history} />);
    } else {
      return (<Redirect to="/login" />);
    }
  }
}

const mapStateToProps = state => ({
  user: state.user.activeUser
});

const mapDispatchToProps = dispatch => ({});


export default connect(mapStateToProps, mapDispatchToProps) (HomeComponent);

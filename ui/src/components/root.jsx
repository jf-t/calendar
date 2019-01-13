import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { connect } from 'react-redux';

import LoginComponent from './auth/login';
import SignupComponent from './auth/signup';
import HomeComponent from './home/home';
import EventComponent from './event/event';

import AddEventComponent from './add-event/add-event';
import HeaderComponent from './header/header';

import { getSession } from '../actions/userActions';

class Root extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.props.getSession();
  }

  render () {
    return (
      <BrowserRouter>
        <div>
          <HeaderComponent />
          <Switch>
            <Route exact path="/" component={ HomeComponent } />
            <Route exact path="/login" component={ LoginComponent } />
            <Route exact path="/signup" component={ SignupComponent } />

            <Route exact path="/event/:id" component={ EventComponent } />
            <Route exact path="/add-event" component={ AddEventComponent } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.activeUser
});

const mapDispatchToProps = dispatch => ({
  getSession: () => dispatch(getSession())
});

export default connect(mapStateToProps, mapDispatchToProps) (Root);

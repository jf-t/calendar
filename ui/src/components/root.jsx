import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'


import LoginComponent from './auth/login';
import SignupComponent from './auth/signup';
import HomeComponent from './home/home';
import EventComponent from './event/event';


class Root extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ HomeComponent } />
          <Route exact path="/login" component={ LoginComponent } />
          <Route exact path="/signup" component={ SignupComponent } />

          <Route path="/event/:id" component={ EventComponent } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Root;

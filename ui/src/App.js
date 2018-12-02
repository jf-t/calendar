import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

import { connect } from 'react-redux';

import Root from './components/root';

class App extends Component {
  render() {
    return (
      <Root />
    );
  }
}

export default connect()(App);

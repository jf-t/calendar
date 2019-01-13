import React, { Component } from 'react';
import './header.scss';

import { connect } from 'react-redux';

import { changeFilter } from '../../actions/calendarActions';

class HeaderComponent extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="header">
        <div className="header-content">
          <div className="logo">
            Calendar
          </div>
          <div className="navigation">
            <a className="add-event">+</a>
            <div className="menu">
              <a className="filter">Day</a>
              <span className="menu-divider"></span>
              <a className="filter">Week</a>
              <span className="menu-divider"></span>
              <a className="filter">Month</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filter: state.calendar.filter
})

const mapDispatchToProps = dispatch => ({
  changeFilter: (filter) => dispatch(changeFilter(filter))
});

export default connect () (HeaderComponent);

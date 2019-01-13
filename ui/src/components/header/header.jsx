import React, { Component } from 'react';
import './header.scss';

import { Link } from 'react-router-dom';
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
            <Link className="add-event-button" to="/add-event">+</Link>
            <div className="menu">
              <a className="filter" onClick={() => this.props.changeFilter(3)}>Day</a>
              <span className="menu-divider"></span>
              <a className="filter" onClick={() => this.props.changeFilter(2)}>Week</a>
              <span className="menu-divider"></span>
              <a className="filter" onClick={() => this.props.changeFilter(1)}>Month</a>
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

export default connect (mapStateToProps, mapDispatchToProps) (HeaderComponent);

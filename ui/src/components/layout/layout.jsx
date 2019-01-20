import React, { Component } from 'react';

import Header from './header';

class LayoutComponent extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    // Use this for always having header component
    if (this.props.location && this.props.history) {
      return (
        <div>
          <Header location={this.props.location}
            history={this.props.history} />
          { this.props.children }
        </div>
      );
    } else {
      return (
        <div>No props and location</div>
      );
    }
  }
}

export default LayoutComponent;

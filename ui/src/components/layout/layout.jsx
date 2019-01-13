import React, { Component } from 'react';

import Header from './header';

class LayoutComponent extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    // Use this for always having header component
    return (
      <div>
        <Header location={this.props.location}
                history={this.props.history} />
        { this.props.children }
      </div>
    );
  }
}

export default LayoutComponent;

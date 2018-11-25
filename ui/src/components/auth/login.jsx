import React, { Component } from 'react';
import { connect } from 'react-redux';

import { login } from '../../actions/userActions';

class LoginComponent extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.changeInput = this.changeInput.bind(this);
    this.submit = this.submit.bind(this);
  }

  changeInput (key, val) {
    this.setState({[key]: val});
  }

  submit () {
    this.props.login(this.state);
  }

  render () {
    if (this.props.user) {
      // re route to home page
    } else {
      return (<div>
                <form onSubmit={this.submit}>
                  <input type="text" placeholder="Email" value={this.state.email} onChange={(e) => this.changeInput('email', e.target.value)} />
                  <input type="password" placeholder="Password" value={this.state.password} onChange={(e) => this.changeInput('password', e.target.value)} />
                  <input type="submit" value="Sign in" />
                </form>
              </div>);
    }
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  login: login
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);

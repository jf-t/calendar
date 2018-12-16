import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { loginWithCreds } from '../../actions/userActions';

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
    this.setState({ [key]: val });
  }

  submit (e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  render () {
    if (this.props.user) {
      return (<Redirect to='/' />);
    } else {
      let error = "";

      if (this.props.error) {
        error = (<div className="error">
                   <p>{this.props.error.error}</p>
                 </div>);
      }
      return (<div>
                {error}
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
  user: state.user.activeUser,
  error: state.user.error
});

const mapDispatchToProps = dispatch => ({
  login: (creds) => dispatch(loginWithCreds(creds))
});

export default connect(mapStateToProps, mapDispatchToProps) (LoginComponent);

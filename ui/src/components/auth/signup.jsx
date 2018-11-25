import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { createUser } from '../../actions/userActions';

class SignupComponent extends Component {
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

  submit (e) {
    e.preventDefault();
    this.props.signup(this.state);
  }

  render () {
    if (this.props.user) {
      return (<Redirect to='/' />);
    } else {
      let error = "";
      
      if (this.props.user.error) {
        error = (<div className="error">
                   <p>{this.props.user.error.error}</p>
                 </div>);
      }
      return (<div>
                {error}
                <form onSubmit={this.submit}>
                  <input type="text" placeholder="Email" value={this.state.email} onChange={(e) => this.changeInput('email', e.target.value)} />
                  <input type="password" placeholder="Password" value={this.state.password} onChange={(e) => this.changeInput('password', e.target.value)} />
                  <input type="submit" value="Sign Up" />
                </form>
              </div>);
    }
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  signup: (user) => dispatch(createUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupComponent);

import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: props.login ? props.login.email : "",
      password: props.login ? props.login.password : "",
      error: ""
    };
  }
  onSubmit = (e) => {
    e.preventDefault();
    let user = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.startLogin(user);
  }
  onEmailChange = e => {
    const email = e.target.value;
    this.setState(() => ({ email }));
  };
  onPasswordChange = e => {
    const password = e.target.value;
    this.setState(() => ({ password }));
  };
  render() {
    return (
      <React.Fragment>
          <h2>Login</h2>
          <form name="form" className="form" onSubmit={this.onSubmit}>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            className="text-input"
            name="email"
            placeholder="Email"
            autoFocus
            value={this.state.email}
            onChange={this.onEmailChange}
          />
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            minLength="8"
            className="text-input"
            placeholder="Password"
            value={this.state.password}
            onChange={this.onPasswordChange}
          />

          <button className="btn-link">Login</button>
        </form>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startLogin: (login) => dispatch(startLogin(login))
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
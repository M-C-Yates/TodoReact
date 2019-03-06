import React from "react";
import { connect } from "react-redux";
import { startRegistration } from "../actions/auth";

export class RegistrationPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: props.registerInfo ? props.registerInfo.email : "",
      password: props.registerInfo ? props.registerInfo.password : "",
      error: ""
    };

    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit = e => {
    e.preventDefault();
    let newUser = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.startRegistration(newUser);
  };

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
        <h2>Signup now</h2>
        <form className="form" onSubmit={this.onSubmit}>
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            className="text-input"
            placeholder="Email"
            autoFocus
            value={this.state.email}
            onChange={this.onEmailChange}
          />
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            minLength="8"
            className="text-input"
            placeholder="Password"
            value={this.state.password}
            onChange={this.onPasswordChange}
          />

          <button className="btn-link">Register</button>
        </form>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startRegistration: registerInfo => dispatch(startRegistration(registerInfo))
});

export default connect(
  undefined,
  mapDispatchToProps
)(RegistrationPage);

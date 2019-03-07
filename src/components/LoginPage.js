import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";
import UserForm from "./UserForm";

export class LoginPage extends React.Component {
  onSubmit = user => {
    this.props.startLogin(user);
  };
  render() {
    return (
      <React.Fragment>
        <h2>Login</h2>
        <UserForm onSubmit={this.onSubmit} />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startLogin: login => dispatch(startLogin(login))
});

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);

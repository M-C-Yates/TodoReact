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
      <div className="login">
        <h2>Login</h2>
        <UserForm onSubmit={this.onSubmit} />
      </div>
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

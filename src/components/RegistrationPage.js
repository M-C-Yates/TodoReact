import React from "react";
import { connect } from "react-redux";
import { startRegistration } from "../actions/auth";
import UserForm from "./UserForm";
export class RegistrationPage extends React.Component {
  onSubmit = user => {
    this.props.startRegistration(user);
  };
  render() {
    return (
      <React.Fragment>
        <h2>Signup now</h2>
        <UserForm onSubmit={this.onSubmit} />
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

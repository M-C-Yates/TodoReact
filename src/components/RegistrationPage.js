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
      <div className="register">
        <UserForm onSubmit={this.onSubmit} />
      </div>
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

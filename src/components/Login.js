import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

const Login = ({ startLogin }) => (
  <React.Fragment>
    <button className="btn-log" onClick={startLogin}>
      Login
    </button>
  </React.Fragment>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(
  undefined,
  mapDispatchToProps
)(Login);

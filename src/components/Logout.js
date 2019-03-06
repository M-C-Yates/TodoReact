import React from "react";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";

const Logout = ({ startLogout }) => (
  <React.Fragment>
    <button className="btn-log" onClick={startLogout}>
      Logout
    </button>
  </React.Fragment>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(
  undefined,
  mapDispatchToProps
)(Logout);

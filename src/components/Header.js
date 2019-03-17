import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";

export class Header extends React.Component {
  componentWillMount(props) {
    const token = window.localStorage.getItem('token')
    if (token) {
      this.props.isAuthenticated = true;
    }
  }
  onClick = (e) => {
    this.props.startLogout();
  }
  render() {
    return (
      <header className="header">
        {this.props.isAuthenticated ? (
          <React.Fragment>
            <Link className="header__title" to="/dashboard">
              <h1>Todo app</h1>
            </Link>
            <button className="header__link" onClick={this.onClick}>
              Logout
            </button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Link className="header__title" to="/">
              <h1>Todo app</h1>
            </Link>
          </React.Fragment>
        )}
      </header>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.id
});

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

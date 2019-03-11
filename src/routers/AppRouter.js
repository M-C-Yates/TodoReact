import React from "react";
import { Router, Switch } from "react-router-dom";
import history from '../history';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import Dashboard from "../components/DashboardPage";
import LandingPage from "../components/LandingPage";
import LoginPage from "../components/LoginPage";
import RegistrationPage from "../components/RegistrationPage";


const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <PublicRoute path="/" component={LandingPage} exact={true} />
      <PublicRoute path="/login" component={LoginPage} />
      <PublicRoute path="/signup" component={RegistrationPage} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
    </Switch>
  </Router>
);

export default AppRouter;

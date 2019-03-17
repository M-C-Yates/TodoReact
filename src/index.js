import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppRouter from "./routers/AppRouter";
import { logIn } from './actions/auth';

import "./styles/styles.scss";

const store = configureStore();

const user = JSON.parse(localStorage.getItem('user'));
if (user) {
  store.dispatch(logIn(user));
}

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("root"));
    hasRendered = true;
  }
};

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

renderApp();
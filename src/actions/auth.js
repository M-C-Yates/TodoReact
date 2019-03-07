import axios from "axios";
import history from "../history";

const api = "https://secure-crag-83596.herokuapp.com";

export const logIn = user => ({
  type: "LOGIN",
  user
});

export const startLogin = login => {
  return dispatch => {
    return axios(`${api}/users/login`, {
      method: "post",
      data: {
        email: login.email,
        password: login.password
      }
    })
      .then(res => {
        const user = {
          token: res.headers["x-auth"],
          id: res.data._id,
          email: res.data.email
        };
        dispatch(logIn(user));
        history.push("/dashboard");
      })
      .catch(e => console.log(e));
  };
};
export const logout = (token) => ({
  type: "LOGOUT",
  token
});

export const startLogout = () => {
  return (dispatch, getState) => {
    const token = getState().auth.token;
    return axios(`${api}/users/me/token`, {
      method: "delete",
      headers: {
        "X-Auth": token
      }
    }).then(res => {
      console.log(typeof token);
      dispatch(logout(token));
      history.push("/");

    })
  };
};

export const register = user => ({
  type: "REGISTER",
  user
});

export const startRegistration = newUser => {
  return dispatch => {
    return axios(`${api}/users`, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        email: newUser.email,
        password: newUser.password
      }
    })
      .then(res => {
        const user = {
          token: res.headers["x-auth"],
          id: res.data._id,
          email: res.data.email
        };
        dispatch(register(user));
        history.push("/dashboard");
      })
      .catch(e => console.log(e));
  };
};

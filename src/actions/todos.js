import axios from 'axios';
import history from '../history';

const api = "https://secure-crag-83596.herokuapp.com";

export const addTodo = (todo) => ({
  type: "ADD_TODO",
  todo
});

export const startAddTodo = (todoData = {}) => {
  return (dispatch, getState) => {
    const token = getState().auth.token;
    return axios(`${api}/todos`, {
      method: "post",
      headers: {
        "x-auth": token
      },
      data: {
        text: todoData.text
      }
    }).then((res) => {
      dispatch(addTodo)
      history.push('/dashboard');
    })
  }
}

export const getTodos = (todos) => ({
  type: "GET_TODOS",
  ...todos
});

export const startGetTodos = () => {
  return (dispatch, getState) => {
    const token = getState().auth.token;
    return axios(`${api}/todos`, {
      method: "get",
      headers: {
        "X-Auth": token
      }
    }).then((res) => {
      dispatch(getTodos(res.data))
    })
  }
}
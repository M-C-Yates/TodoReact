import axios from "axios";
import history from "../history";

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
			dispatch(addTodo);
			history.push("/dashboard");
		});
	};
};

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
				"x-auth": token
			}
		}).then((res) => {
			dispatch(getTodos(res.data));
		});
	};
};

export const editTodo = (id, updates) => ({
	type: "EDIT_TODO",
	id,
	updates
});

export const startEditTodo = (id, updates) => {
	return (dispatch, getState) => {
		const _creator = getState().auth.id;
		const token = getState().auth.token;
		console.log(updates)
		return axios(`${api}/todos/${id}`, {
			method: "patch",
			headers: {
				"x-auth": token
			},
			data: {
				text: updates.text,
				completed: updates.completed
			},
			user: {
				_creator
			}
		}).then((res) => {
			dispatch(editTodo(id, updates));
			dispatch(startGetTodos());
		})
	};
};

export const removeTodo = (id) => ({
	type: "REMOVE_TODO",
	id
});
export const startRemoveTodo = (id) => {
	return (dispatch, getState) => {
		const token = getState().auth.token;
		return axios(`${api}/todos/${id}`, {
			method: "delete",
			headers: {
				"x-auth": token
			}
		}).then((res) => {
			dispatch(removeTodo(id));
			dispatch(startGetTodos());
		});
	};
};

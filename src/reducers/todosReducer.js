export default (state = [], action) => {
	console.log(action);
	switch (action.type) {
		case "ADD_TODO":
			return [...state, action.todo];
		case "GET_TODOS":
			return action.todos;
		case "EDIT_TODO":
			return state.map((todo) => {
				if (todo._id === action._id) {
					return {
						...todo,
						...action.updates
					};
				} else {
					return todo;
				}
			});
		case "REMOVE_TODO":
			return state.filter(({ id }) => id !== action.id);
		default:
			return state;
	}
};

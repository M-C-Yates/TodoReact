import React from "react";
import { connect } from "react-redux";
import { startGetTodos } from "../actions/todos";
import TodosListFilters from "./TodosListFilters";
import selectTodos from "../selectors/todos";
import TodoListItem from "./TodoListItem";

export class TodoList extends React.Component {
	componentDidMount(props) {
		this.props.startGetTodos();
	}

	render() {
		return (
			<div className="list">
				<TodosListFilters />
				{this.props.todos.length === 0 ? (
					<div>
						<span className="list-item list-item__message">No Todos Found</span>
					</div>
				) : (
					<div className="container-div2">
						{this.props.todos.map((todo) => {
							return <TodoListItem key={todo._id} {...todo} />;
						})}
					</div>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	todos: selectTodos(state.todos, state.filters)
});

const mapDispatchToProps = (dispatch) => ({
	startGetTodos: () => dispatch(startGetTodos())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList);

import React from "react";
import { startAddTodo } from "../actions/todos";
import { connect } from "react-redux";

export class TodoForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: props.todoData ? props.todoData.text : "",
			error: ""
    };
	}
	onTextChange = (e) => {
		const text = e.target.value;
		this.setState(() => ({ text }));
	};
	onSubmit = (e) => {
		e.preventDefault();

		if (!this.state.text) {
			this.setState(() => ({
				error: "Please provide a description for the Todo."
			}));
		} else {
			this.setState(() => ({ error: "" }));
			this.props.startAddTodo({
				text: this.state.text
			});
		}
	};
	render() {
		return (
			<form className="form" onSubmit={this.onSubmit}>
				{this.state.error && <p className="form_error">{this.state.error}</p>}
				<input
					type="text"
					className="text-input"
					placeholder="Task"
					autoFocus
					value={this.state.text}
					onChange={this.onTextChange}
				/>

				<button className="btn-link">Save Todo</button>
			</form>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
  startAddTodo: (todo) => dispatch(startAddTodo(todo))
})

export default connect(undefined, mapDispatchToProps)(TodoForm)
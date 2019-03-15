import React from "react";
import { connect } from "react-redux";
import { startEditTodo } from "../actions/todos";

export class EditTodo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: props.todoData ? props.todoData.text : "",
			completed: props.todoData ? props.todoData.completed : false,
			error: ""
		};
	}
	onTextChange = (e) => {
		const text = e.target.value;
		this.setState(() => ({ text }));
	};
	onCompletedChange = (e) => {
		const completed = e.target.checked;
		this.setState(() => ({ completed }));
	};
	onSubmit = (e) => {
		e.preventDefault();
		if (!this.state.text && this.state.completed === false) {
			this.setState(() => ({
				error: "Please Provide a description for the Todo."
			}));
		} else {
			this.setState(() => ({ error: "" }));
			this.props.startEditTodo(this.props.id, {
				text: this.state.text,
				completed: this.state.completed
			});
		}
	};
	render() {
		return (
			<form className="edit" onSubmit={this.onSubmit}>
				{this.state.error && <p className="form_error">{this.state.error}</p>}
				<div>
				<label htmlFor="task" className="edit-label">Task</label>
					<input
						type="text"
						id="task"
						className="text-input"
						placeholder="Task"
						value={this.state.text}
						onChange={this.onTextChange}
					/>

				</div>
				<div>
				<label htmlFor="completed" className="edit-label">Completed: </label>
				<input
				type="checkbox"
				name="completed"
				id="completed"
				checked={this.state.completed}
				className="edit-complete"
				value={this.state.completed}
				onChange={this.onCompletedChange}
			/>
				</div>

				<button className="edit-btn">Edit Todo</button>
			</form>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	startEditTodo: (_id, todo) => dispatch(startEditTodo(_id, todo))
});

export default connect(
	undefined,
	mapDispatchToProps
)(EditTodo);

import React from "react";
import EditTodo from "./EditTodo";
export class TodoListItem extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			selected: false,
		}
	}

	addClass = () => {

	}
	onClick = (e) => {
		if (!this.state.selected) {
			const selected = true;
			this.setState(() => ({ selected }))
			// const id = e.target
		} else {
			this.setState(() => ({ selected: false}))
		}
		console.log(this.state)

	}
	render() {
		return (
				<div className="list-item">
					
						<div>
							<h3 className="list-item__title">{this.props.text}</h3>
							<span className="list-item__sub-title">{this.props.createdAt}</span>
						</div>
						<h3 className="list-item__data">{this.props.completed.toString()}</h3>
						<button onClick={this.onClick} className="btn-edit">Edit</button>
						<div className={this.state.selected === true ? "visible" : "hidden"}>
							<EditTodo
								todoData={{
									text: this.props.text,
									completed: this.props.completed
								}}
								id={this.props._id}
							/>
						</div>

					
				</div>
			);
			
	}
}

export default TodoListItem;

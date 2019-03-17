import React from "react";
import { connect } from "react-redux";
import { startRemoveTodo } from "../actions/todos";

export class RemoveTodo extends React.Component {
	onClick = (e) => {
    e.preventDefault();
    console.log(this.props, this.props.id)
		this.props.startRemoveTodo(this.props.id);
	};

	render() {
		return <button className="remove" onClick={this.onClick}>Remove</button>;
	}
}

const mapDispatchToProps = (dispatch) => ({
	startRemoveTodo: (id) => dispatch(startRemoveTodo(id))
});

export default connect(
	undefined,
	mapDispatchToProps
)(RemoveTodo);

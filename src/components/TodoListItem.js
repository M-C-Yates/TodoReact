import React from "react";
import { Link } from "react-router-dom";
import RemoveTodo from './RemoveTodo';

const TodoListItem = ({ text, createdAt, completed, _id }) => (
	<React.Fragment>
		<Link className="list-item" to={`/edit/${_id}`}>
			<div>
				<h3 className="list-item__title">{text}</h3>
				<span className="list-item__sub-title">{createdAt}</span>
			</div>
			<h3 className="list-item__data">{completed.toString()}</h3>
    </Link>
    <RemoveTodo id={_id}>Remove</RemoveTodo>
	</React.Fragment>
);



export default TodoListItem

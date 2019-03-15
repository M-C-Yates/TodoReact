import React from "react";
import EditTodo from "./EditTodo";
import RemoveTodo from "./RemoveTodo";

const TodoListItem = ({ text, createdAt, completed, _id }) => (
	<div className="list-item">
		<div>
			<h3 className="list-item__title">{text}</h3>
			<span className="list-item__sub-title">{createdAt}</span>
		</div>
		<h3 className="list-item__data">{completed.toString()}</h3>
		<label htmlFor="checkbox" id="checkLabel" >Edit</label>
		<input type="checkbox" id="checkbox" name="checkbox" className="list-item_checkbox" />

		<EditTodo
			todoData={{
				text,
				completed
			}}
			id={_id}
		/>
		<RemoveTodo id={_id}>Remove</RemoveTodo>
	</div>
);

export default TodoListItem;

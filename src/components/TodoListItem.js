import React from 'react';
import { Link } from 'react-router-dom';

const TodoListItem = ({text, createdAt, completed, _id}) => (
  <Link className="list-item" to={`/edit/${_id}`}>
    <div>
      <h3 className="list-item__title">{text}</h3>
      <span className="list-item__sub-title">
        {createdAt}
      </span>
    </div>
    <h3 className="list-item__data">
      {completed}
    </h3>
  </Link>
)

export default TodoListItem;
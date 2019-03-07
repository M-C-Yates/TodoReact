import React from 'react';
import { Link } from 'react-router-dom';
import { connect} from 'react-redux';
import getTodosTotal from '../selectors/todosTotal';
import selectTodos from '../selectors/todos';


export const TodosSummary = ({todoCount, todosTotal}) => {
  const todoWord = todoCount === 1 ? 'todo' : 'todos';
  return (
    <div className="page-header">
      <div className="content-container">
        <h3>Viewing <span>{todoCount}</span> {todoWord}</h3>
        <ul>
          <li>{todosTotal.completed} completed</li>
          <li>{todosTotal.unCompleted} unfinished</li>
        </ul>
        <Link className="btn-link" to="/create">Add Todo</Link>
      </div>
    </div>
  )
}



const mapStateToProps = (state) => {
  const visibleTodos = selectTodos(state.todos, state.filters);

  return {
    todoCount: visibleTodos.length,
    todosTotal: getTodosTotal(visibleTodos)
  }
}

export default connect(mapStateToProps)(TodosSummary);
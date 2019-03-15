import React from 'react';
import { connect} from 'react-redux';
import getTodosTotal from '../selectors/todosTotal';
import selectTodos from '../selectors/todos';


export const TodosSummary = ({todoCount, todosTotal}) => {
  const todoWord = todoCount === 1 ? 'todo' : 'todos';
  return (
    <div className="summary">
        <h3 className="summary-main">Viewing <span>{todoCount}</span> {todoWord}</h3>
        <ul className="summary-list">
          <li>{todosTotal.completed} completed</li>
          <li>{todosTotal.unCompleted} unfinished</li>
        </ul>
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
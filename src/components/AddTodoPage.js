import React from 'react';
import { connect } from 'react-redux';
import TodoForm from './TodoForm';
import { startAddTodo } from '../actions/todos';

export class AddTodoPage extends React.Component {
  onSubmit = (todo) => {
    this.props.startAddTodo(todo);
  }
  render() {
    return (
      <React.Fragment>
        <h2>Add a Todo</h2>
        <TodoForm onSubmit={this.onSubmit} />
      </React.Fragment>
    )
  }
}

const madDispatchToProps = (dispatch) => ({
  startAddTodo: (todo) => dispatch(startAddTodo(todo))
});

export default connect(undefined, madDispatchToProps)(AddTodoPage);

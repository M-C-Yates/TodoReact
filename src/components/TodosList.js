import React from "react";
import { connect } from "react-redux";
import { startGetTodos } from '../actions/todos';
import selectTodos from "../selectors/todos";
import TodoListItem from "./TodoListItem";

export class TodoList extends React.Component {
  componentDidMount(props) {
    this.props.startGetTodos();
  }
  render() {
    return (
      <div className="content-container">
        <div className="list-header">
          <div className="show-for-mobile">Expenses</div>
          <div className="show-for-desktop">Expense</div>
          <div className="show-for-desktop">Completed</div>
        </div>
        <div className="list-body">
          {this.props.todos.length === 0 ? (
            <div>
              <span className="list-item list-item__message">
                No Todos Found
              </span>
            </div>
          ) : (
            this.props.todos.map(todo => {
              return <TodoListItem key={todo._id} {...todo} />;
            })
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: selectTodos(state.todos, state.filters)
});

const mapDispatchToProps = (dispatch) => ({
  startGetTodos: () => dispatch(startGetTodos())
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

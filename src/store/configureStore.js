import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/authReducer';
import filterReducer from '../reducers/filterReducer';
import todosReducer from '../reducers/todosReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      filters: filterReducer,
      todos: todosReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
}
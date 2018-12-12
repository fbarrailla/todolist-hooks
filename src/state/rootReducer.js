import { combineReducers } from 'redux';

import inputReducer from './input';
import filterReducer from './filter';
import todosReducer from './todos';

export default combineReducers({
  input: inputReducer,
  filter: filterReducer,
  todos: todosReducer,
});

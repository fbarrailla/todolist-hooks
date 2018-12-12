import { createSelector } from 'reselect';
import { getFilter } from './filter';

// Actions
const ADD = 'todolist/todos/ADD';
const REMOVE = 'todolist/todos/REMOVE';
const TOGGLE = 'todolist/todos/TOGGLE';

// Reducer
const storedValue = localStorage.getItem('todos');
const initialState = storedValue ? JSON.parse(storedValue) : [];

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        { id: `${+new Date()}`, task: action.payload, done: false },
      ];
    case REMOVE:
      return state.filter(todo => todo.id !== action.payload);
    case TOGGLE:
      return state.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });
    default:
      return state;
  }
}

// Action Creators
export const addTodo = task => ({ type: ADD, payload: task });
export const removeTodo = id => ({ type: REMOVE, payload: id });
export const toggleTodo = id => ({ type: TOGGLE, payload: id });

// Selectors
export const getTodos = state => state.todos;
export const getVisibleTodos = createSelector(
  getTodos,
  getFilter,
  (todos, filter) => {
    if (filter === '*') {
      return todos;
    } else if (filter === 'active') {
      return todos.filter(t => !t.done);
    } else if (filter === 'done') {
      return todos.filter(t => t.done);
    }
  }
);
export const getTodosCount = createSelector(
  getTodos,
  todos => ({
    active: todos.filter(t => t.done).length,
    total: todos.length,
  })
);

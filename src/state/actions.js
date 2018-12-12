import * as types from './actionTypes';

// filter
export const setFilter = filter => ({
  type: types.SET_FILTER,
  payload: filter,
});
export const clearFilter = clearFilter => ({ type: types.CLEAR_FILTER });

// input
export const setInputValue = value => ({
  type: types.SET_INPUT_VALUE,
  payload: value,
});
export const clearInput = value => ({ type: types.CLEAR_INPUT });

// todos
export const setTodos = todos => ({ type: types.SET_TODOS, payload: todos });
export const addTodo = task => ({ type: types.ADD_TODO, payload: task });
export const removeTodo = id => ({ type: types.REMOVE_TODO, payload: id });
export const toggleTodo = id => ({ type: types.TOGGLE_TODO, payload: id });

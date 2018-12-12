import * as types from './actionTypes';

export function filter(state = '*', action) {
  switch (action.type) {
    case types.SET_FILTER:
      return action.payload;
    case types.CLEAR_FILTER:
      return '*';
    default:
      return state;
  }
}

export function input(state = '', action) {
  switch (action.type) {
    case types.SET_INPUT_VALUE:
      return action.payload;
    case types.CLEAR_INPUT:
      return '';
    default:
      return state;
  }
}

export function todos(state = [], action) {
  switch (action.type) {
    case types.SET_TODOS:
      return action.payload;
    case types.ADD_TODO:
      return [
        ...state,
        { id: `${+new Date()}`, task: action.payload, done: false },
      ];
    case types.REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload);
    case types.TOGGLE_TODO:
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

// Actions
const SET_VALUE = 'todolist/input/SET_VALUE';
const CLEAR = 'todolist/input/CLEAR';

// Reducer
export default function inputReducer(state = '', action) {
  switch (action.type) {
    case SET_VALUE:
      return action.payload;
    case CLEAR:
      return '';
    default:
      return state;
  }
}

// Action Creators
export const setInputValue = value => ({ type: SET_VALUE, payload: value });
export const clearInput = value => ({ type: CLEAR });

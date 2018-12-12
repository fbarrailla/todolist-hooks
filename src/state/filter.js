// Actions
const SET = 'todolist/filter/SET';
const CLEAR = 'todolist/filter/CLEAR';

// Reducer
export default function filterReducer(state = '*', action) {
  switch (action.type) {
    case SET:
      return action.payload;
    case CLEAR:
      return '*';
    default:
      return state;
  }
}

// Action Creators
export const setFilter = filter => ({ type: SET, payload: filter });
export const clearFilter = clearFilter => ({ type: CLEAR });

// Selectors
export const getFilter = state => state.filter;

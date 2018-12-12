import { createSelector } from 'reselect';

// filter
export const filter = state => state.filter;

// todos
export const todos = state => state.todos;
export const visibleTodos = createSelector(
  todos,
  filter,
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
export const todosCount = createSelector(
  todos,
  todos => ({
    active: todos.filter(t => t.done).length,
    total: todos.length,
  })
);

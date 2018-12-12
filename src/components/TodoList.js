import React from 'react';
import { useStore } from '../state/store';
import TodoListItem from './TodoListItem';

const TodoList = () => {
  const { select } = useStore();

  return (
    <ul className="TodoList">
      {select.visibleTodos().map(todo => (
        <TodoListItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};

export default TodoList;

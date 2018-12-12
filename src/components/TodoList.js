import React from 'react';
import useSelector from '../hooks/useSelector';
import TodoListItem from './TodoListItem';
import { getVisibleTodos } from '../state/todos';

const TodoList = () => {
  const todos = useSelector(getVisibleTodos);
  return (
    <ul className="TodoList">
      {todos.map(todo => (
        <TodoListItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};

export default TodoList;

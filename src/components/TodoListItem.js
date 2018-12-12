import React from 'react';
import classNames from 'classnames';
import { useStore } from '../state/store';

const TodoListItem = ({ id, task, done }) => {
  const { dispatch } = useStore();
  return (
    <li
      className={classNames('TodoListItem', {
        done,
      })}
    >
      <p className="TodoListItem--task" onClick={() => dispatch.toggleTodo(id)}>
        {task}
      </p>
      <button
        className="TodoListItem--remove"
        onClick={() => dispatch.removeTodo(id)}
      >
        x
      </button>
    </li>
  );
};

export default TodoListItem;

import React from 'react';
import classNames from 'classnames';
import useStore from '../hooks/useStore';
import { toggleTodo, removeTodo } from '../state/todos';

const TodoListItem = ({ id, task, done }) => {
  const { dispatch } = useStore();
  return (
    <li
      className={classNames('TodoListItem', {
        done,
      })}
    >
      <p
        className="TodoListItem--task"
        onClick={() => dispatch(toggleTodo(id))}
      >
        {task}
      </p>
      <button
        className="TodoListItem--remove"
        onClick={() => dispatch(removeTodo(id))}
      >
        x
      </button>
    </li>
  );
};

export default TodoListItem;

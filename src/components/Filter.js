import React from 'react';
import classNames from 'classnames';
import { useStore } from '../state/store';
//const { useStore } = store;

const Filter = ({ label, value }) => {
  const { state, dispatch } = useStore();

  const handleClick = () => {
    if (value !== '*' && state.filter === value) {
      dispatch.clearFilter();
    } else {
      dispatch.setFilter(value);
    }
  };

  return (
    <button
      className={classNames('Filter', { active: state.filter === value })}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default Filter;

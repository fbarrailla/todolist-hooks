import React from 'react';
import { useStore } from '../state/store';

const Header = () => {
  const { state, dispatch } = useStore();

  let inputRef;
  return (
    <form
      className="Header"
      onSubmit={event => {
        event.preventDefault();
        dispatch.addTodo(state.input);
        dispatch.clearInput();
        inputRef.focus();
      }}
    >
      <input
        placeholder="Type something..."
        type="text"
        onChange={e => dispatch.setInputValue(e.target.value)}
        value={state.input}
        ref={input => (inputRef = input)}
      />
      <button type="submit">+</button>
    </form>
  );
};

export default Header;

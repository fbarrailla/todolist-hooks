import { useEffect } from 'react';

export default function useLocalStorage(state) {
  useEffect(() => localStorage.setItem('todos', JSON.stringify(state.todos)), [
    state.todos,
  ]);
}

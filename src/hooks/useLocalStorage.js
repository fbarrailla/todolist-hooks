import { useEffect } from 'react';
import { useStore } from '../state/store';

export default function useLocalStorage() {
  const { state, dispatch } = useStore();

  // component did mount = set items from local storage
  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      try {
        dispatch.setTodos(JSON.parse(storedTodos));
      } catch (err) {
        // corrupted storage
      }
    }
  }, []);

  // component did update = store items
  useEffect(() => localStorage.setItem('todos', JSON.stringify(state.todos)), [
    state.todos,
  ]);
}

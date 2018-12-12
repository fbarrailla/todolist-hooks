import { useContext } from 'react';
import StoreContext from '../state/StoreContext';

export default function useStore() {
  const { state, dispatch } = useContext(StoreContext);
  return {
    state,
    dispatch,
  };
}

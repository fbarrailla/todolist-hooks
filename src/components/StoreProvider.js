import React, { useState, useEffect } from 'react';
import StoreContext from '../state/StoreContext';
import rootReducer from '../state/rootReducer';
import useLocalStorage from '../hooks/useLocalStorage';
import { createStore } from 'redux';

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devTools);

const StoreProvider = ({ children }) => {
  const [state, setState] = useState(store.getState());

  useLocalStorage(state);

  useEffect(() => store.subscribe(() => setState(store.getState())), [true]);

  if (!state) {
    return null;
  }
  return (
    <StoreContext.Provider value={{ state, dispatch: store.dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;

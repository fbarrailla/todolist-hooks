import { initStore } from 'use-redux-store';
import * as actions from './actions';
import * as reducers from './reducers';
import * as selectors from './selectors';

const store = initStore({
  reducers,
  actions,
  selectors,
});

export const useStore = store.useStore;
export const StoreProvider = store.StoreProvider;

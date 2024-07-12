// store.js
import { configureStore } from '@reduxjs/toolkit';
import transactionsReducer from './reducers';
import { saveStateToIndexedDB, loadStateFromIndexedDB } from './indexedDB';

// Create the store synchronously
const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
  },
});

// Function to load state and initialize the store
const initializeStore = async () => {
  const persistedState = await loadStateFromIndexedDB();
  store.dispatch({ type: 'LOAD_INITIAL_STATE', payload: persistedState });
};

// Subscribe to store changes to save state to IndexedDB
store.subscribe(() => {
  saveStateToIndexedDB(store.getState());
});

// Loads the persisted state 
// immediately after store creation and was responsible for fetching the persisted 
// state and updating the store with this state using a Redux action.
initializeStore();

export default store;

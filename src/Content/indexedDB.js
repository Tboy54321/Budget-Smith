// indexedDB.js
import { openDB } from 'idb';

const DB_NAME = 'redux-store';
const STORE_NAME = 'state';

const dbPromise = openDB(DB_NAME, 1, {
  upgrade(db) {
    db.createObjectStore(STORE_NAME);
  },
});

export const saveStateToIndexedDB = async (state) => {
  const db = await dbPromise;
  console.log('Saving state to IndexedDB:', state);
  const tx = db.transaction(STORE_NAME, 'readwrite');
  await tx.objectStore(STORE_NAME).put(state, 'redux-state');
  await tx.done;
};

export const loadStateFromIndexedDB = async () => {
  const db = await dbPromise;
  const state = await db.transaction(STORE_NAME).objectStore(STORE_NAME).get('redux-state');
  console.log('Loaded state from IndexedDB:', state);
  return state || {};
};

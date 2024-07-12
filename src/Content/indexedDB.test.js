import { saveStateToIndexedDB, loadStateFromIndexedDB } from './indexedDB';

describe('IndexedDB State Persistence', () => {
  it('should save state to IndexedDB', async () => {
    const testState = { user: { name: 'Test User' } };
    await saveStateToIndexedDB(testState);
    const savedState = await loadStateFromIndexedDB();
    expect(savedState).toEqual(testState);
  });
});


describe('IndexedDB State Loading', () => {
    it('should load state from IndexedDB', async () => {
      const testState = { user: { name: 'Test User' } };
      await saveStateToIndexedDB(testState);
      const loadedState = await loadStateFromIndexedDB();
      expect(loadedState).toEqual(testState);
    });
  });

  describe('IndexedDB Error Handling', () => {
    it('should handle errors when saving state', async () => {
      const originalSaveStateToIndexedDB = saveStateToIndexedDB;
      saveStateToIndexedDB = async () => {
        throw new Error('Simulated error');
      };
  
      const testState = { user: { name: 'Test User' } };
      await expect(saveStateToIndexedDB(testState)).rejects.toThrow('Simulated error');
  
      saveStateToIndexedDB = originalSaveStateToIndexedDB;
    });
  });
  
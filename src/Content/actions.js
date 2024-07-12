import { loginSuccess, loginFail, logout, updateUserProfileSuccess, updateUserProfilefail } from "./reducers";
import { loadStateFromIndexedDB, saveStateToIndexedDB } from "./indexedDB";

export const loginUser = (credentials) => async (dispatch) => {
  try {
    const state = await loadStateFromIndexedDB();
    console.log("Loaded state from IndexedDB:", state);
    const { user } = state.transactions || {};

    if (user && credentials.email === user.email && credentials.password === user.password) {
      dispatch(loginSuccess({ user: { id: user.id, email: user.email }, isProfileComplete: user.isProfileComplete }));
    } else {
      console.log("No matching user found or invalid credentials");
      dispatch(loginFail({ error: 'Invalid email or password' }));
    }
  } catch (error) {
    console.log("Error loading state from IndexedDB:", error);
    dispatch(loginFail({ error: 'Failed to load user data' }));
  }
};

export const signupUser = (credentials) => async (dispatch) => {
  const user = { id: Date.now(), email: credentials.email, password: credentials.password, isProfileComplete: true };
  try {
    const state = await loadStateFromIndexedDB();
    const newState = { ...state, transactions: { ...state.transactions, user, isAuthenticated: true, isProfileComplete: false } };
    await saveStateToIndexedDB(newState);
    console.log('User saved to IndexedDB:', newState);
    dispatch(loginSuccess({ user, isProfileComplete: false }));
  } catch (error) {
    console.log("Error saving user to IndexedDB:", error);
    dispatch(loginFail({ error: 'Signup failed' }));
  }
};

export const logoutUser = () => (dispatch) => {
  dispatch(logout());
};

export const updateUserProfile = (profileData) => async (dispatch) => {
  try {
    const state = await loadStateFromIndexedDB();
    const user = state.transactions?.user;

    if (user) {
      const updatedUser = { ...user, ...profileData };
      const newState = { ...state, transactions: { ...state.transactions, user: updatedUser, isProfileComplete: true } };
      await saveStateToIndexedDB(newState);
      console.log('User profile updated in IndexedDB:', updatedUser);
      dispatch(updateUserProfileSuccess({ user: updatedUser }));
    } else {
      console.log("User not found in state:", state);
      dispatch(updateUserProfilefail({ error: 'User not found' }));
    }
  } catch (error) {
    console.log("Error updating user profile:", error);
    dispatch(updateUserProfilefail({ error: 'Failed to update profile' }));
  }
};

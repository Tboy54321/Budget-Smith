import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

const initialState = {
  incomeById: {},
  allIncomeIds: [],
  expensesById: {},
  allExpensesIds: [],
  user: null,
  isAuthenticated: false,
  isProfileComplete: false,
  authError: null,
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransaction(state, action) {
      const { type, transaction } = action.payload;
      const { id, title, description, amount, date, totalDate, time } = transaction;

      if (type === 'income') {
        state.incomeById[id] = { id, title, description, amount, date, totalDate, time };
        state.allIncomeIds.push(id);
      } else if (type === 'expense') {
        state.expensesById[id] = { id, title, description, amount, date, totalDate, time };
        state.allExpensesIds.push(id);
      }
    },
    deleteTransaction(state, action) {
      const { type, id } = action.payload;

      if (type === 'income') {
        delete state.incomeById[id];
        state.allIncomeIds = state.allIncomeIds.filter(incomeId => incomeId !== id);
      } else if (type === 'expense') {
        delete state.expensesById[id];
        state.allExpensesIds = state.allExpensesIds.filter(expenseId => expenseId !== id);
      }
    },
    loginSuccess(state, action) {
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.isProfileComplete = action.payload.isProfileComplete;
      state.authError = null;
    },
    loginFail(state, action) {
      state.authError = action.payload.error;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.authError = null;
    },
    updateUserProfileSuccess(state, action) {
      state.user = action.payload.user;
      state.isProfileComplete = true;
    },
    updateUserProfilefail(state, action) {
      state.authError = action.payload.error;
    },
    // Reducer to load initial state from persisted storage
    loadInitialState(state, action) {
      // Merge the current state with the persisted state
      return {
        ...state,
        ...action.payload,
      };
    },
  }
});

// Memoized selectors using createSelector from reselect
export const selectTransactionsByCategory = createSelector(
  [(state) => state.transactions.incomeById, (state) => state.transactions.expensesById],
  (incomeById, expensesById) => {
    const transactions = [
      ...Object.values(incomeById),
      ...Object.values(expensesById),
    ];

    return transactions.reduce((acc, transaction) => {
      const { category, amount } = transaction;
      if (!acc[category]) {
        acc[category] = { category, amount: 0 };
      }
      acc[category].amount += amount;
      return acc;
    }, {});
  }
);

export const selectExpenses = createSelector(
  [(state) => state.transactions.expensesById, (state) => state.transactions.allExpensesIds],
  (expensesById, allExpensesIds) => allExpensesIds.map(id => expensesById[id])
);

export const { addTransaction, deleteTransaction, loginSuccess, loginFail, logout, updateUserProfileSuccess, updateUserProfilefail, loadInitialState } = transactionsSlice.actions;

export const selectIncome = createSelector(
  [(state) => state.transactions.incomeById, (state) => state.transactions.allIncomeIds],
  (incomeById, allIncomeIds) => allIncomeIds.map(id => incomeById[id])
);

export const selectIsAuthenticated = state => state.transactions.isAuthenticated;
export const selectAuthError = state => state.transactions.authError;
export const selectIsProfileComplete = state => state.transactions.isProfileComplete;
export const selectUser = state => state.transactions.user;

export default transactionsSlice.reducer;

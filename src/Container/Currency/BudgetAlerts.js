import { useEffect, useContext } from 'react';
import { CurrencyContext } from './CurrencyContext';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { selectExpenses } from '../../Content/reducers';

export const BudgetAlerts = () => {

  // Fetching expenses from Redux state
  const expense = useSelector(selectExpenses);

  // Accessing budgetLimit and alertThreshold from CurrencyContext
  const { budgetLimit, alertThreshold } = useContext(CurrencyContext);

  // Calculating total expenses
  const expenseAmount = expense.reduce((total, transaction) => total + parseFloat(transaction.amount), 0);

  // Alerting users based on budget thresholds
  useEffect(() => {
    if (expenseAmount >= budgetLimit * alertThreshold) {
      toast.warning('You are approaching your budget limit!');
    }
    if (expenseAmount >= budgetLimit) {
      toast.error('You have exceeded your budget limit!');
    }
  }, [expenseAmount, budgetLimit, alertThreshold]);

  // This hook does not return anything
  return null;
};

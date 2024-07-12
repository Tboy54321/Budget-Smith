import React from 'react';
import './TransactionHistory.css';
import { selectExpenses, selectIncome } from '../../Content/reducers';
import { useSelector } from 'react-redux';

export const TransactionHistory = () => {
    const incomeHistory = useSelector(selectIncome);
    const expenseHistory = useSelector(selectExpenses);
    const allTransactions = [...incomeHistory, ...expenseHistory];

  return (
    <div className="transactions">
      <div className="transactions-header">
        <p>Transactions</p>
        <div className="filter">
          <span>Monthly</span>
          <i className="arrow-down"></i>
        </div>
      </div>
      <table className="transactions-table">
        <thead>
          <tr>
            <th>Purpose</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
        {allTransactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.title}</td>
            <td>{transaction.description}</td>
            <td className={transaction.amount < 0 ? 'negative-amount' : 'positive-amount'}>{transaction.amount < 0 ? '- ' : '+ '}₦{Math.abs(transaction.amount)}</td>
            <td>{transaction.date.totalDate}</td>
            <td>{transaction.time}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};


//TransactionList.js
import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Import useDispatch and useSelector from react-redux
import {deleteTransaction, selectIncome, selectExpenses } from '../../Content/reducers';
import './TransactionList.css'; // Import the CSS file
import { MdDelete } from "react-icons/md";

const TransactionList = ({type}) => {
  // Use useSelector to access transaction state from Redux store
  const transactions = useSelector(type === 'income' ? selectIncome : selectExpenses);
  const dispatch = useDispatch(); // Get dispatch function from useDispatch

  // Function to handle transaction deletion
  const handleDeleteTransaction = (transactionId) => {
    // Dispatch the deleteTransaction action with the transaction ID as payload
    dispatch(deleteTransaction({ type, id: transactionId }));
  };

  return (
    <>
      <ul className="transaction-list">
      {transactions.map((transaction) => (
        <li className="listContainer" key={transaction.id}>
          <div className="imageIcon">
            <h1>hello</h1>
          </div>
          <div className="formContent">
            <h1>{transaction.description}</h1>
            <div className="formElements">
              <div className="formDate">
                <span className="material-icons-outlined">payments</span>{transaction.date.day}/{transaction.date.month}/{transaction.date.year}
              </div>
              <div className="formCash">
                <span className="material-icons-outlined">payments</span> {transaction.amount}
              </div>
              <div className="formMessage">
                <span className="material-icons-outlined">description</span> {transaction.title}
              </div>
              <button className="delete-button" onClick={() => handleDeleteTransaction(transaction.id)}><MdDelete  size={45} /></button>
            </div>
          </div>
        </li>
      ))}
    </ul>
    </>
  );
};

export default memo(TransactionList);

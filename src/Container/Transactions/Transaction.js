import React, { useState, useContext } from "react";
import { useSelector } from "react-redux";
import { selectExpenses, selectIncome } from "../../Content/reducers";
import TransactionList from "./TransactionList";
import './Transaction.css';
import TransactionForm from "./TransactionForm";
import { CurrencyContext } from "../Currency/CurrencyContext";

export const Transaction = ({ transactionOperation }) => {
  const transactions = useSelector(transactionOperation === 'income' ? selectIncome : selectExpenses);
  const [showTransactionList, setShowTransactionList] = useState(false); // State for controlling visibility
  const { currency, convertCurrency, addTransaction } = useContext(CurrencyContext);

  const totalTransactionAmount = transactions.reduce((total, transaction) => total + parseFloat(transaction.amount), 0);

  const handleAddTransactionClick = (transaction) => {
    setShowTransactionList(true);
    addTransaction(transaction); // Add the transaction to the context
  };
  return (
    <main className="main-content">
      <section className="transaction-section">
        <h1>{transactionOperation.charAt(0).toUpperCase() + transactionOperation.slice(1)}</h1>
        <div className="total-transaction">
          Total {transactionOperation}: <span>{currency}{convertCurrency(totalTransactionAmount, 'USD', currency)}</span>
        </div>
        <div className="transaction-container">
          <div className="transactionForm-container">
            <TransactionForm type={transactionOperation} onAddTransaction={handleAddTransactionClick} />
          </div>
          <div className="TransactionList-container">
          {(showTransactionList || transactions.length > 0) && <TransactionList type={transactionOperation} className="slide-in-fwd-top" />}
          </div>
        </div>
      </section>
    </main>
  );
};

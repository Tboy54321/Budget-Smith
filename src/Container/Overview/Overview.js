import React, { useState, useContext } from 'react';
import './Overview.css';
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";
import { FcSimCardChip } from "react-icons/fc";
import { FaCcMastercard } from "react-icons/fa6";
import { BiShowAlt, BiSolidHide } from "react-icons/bi";
import { useSelector } from 'react-redux';
import { selectIncome, selectExpenses } from '../../Content/reducers';
import { TransactionChart } from '../Graph/TransactionChart';
import { TransactionHistory } from '../Transactions/TransactionHistory';
import { CurrencyContext } from '../Currency/CurrencyContext';
import CurrencyConverter from '../Currency/CurrencyConverter';


export const Overview = () => {
  const income = useSelector(selectIncome);
  const expense = useSelector(selectExpenses);

  const incomeAmount = income.reduce((total, transaction) => total + parseFloat(transaction.amount), 0);
  const expenseAmount = expense.reduce((total, transaction) => total + parseFloat(transaction.amount), 0);
  const balanceAmount = incomeAmount - expenseAmount
  const [showNumber, setShowNumber] = useState(false);
  const cardNumber = "1234 5678 9012 3456";
  const maskedNumber = "**** **** **** " + cardNumber.slice(-4);

  const { currency, convertCurrency, budgetLimit } = useContext(CurrencyContext);


  return (
    <div className='Overview-container'>
      <div className='Overview-content-1'>
        <p>Overview</p>
        <div className="Balance-container">
          {/* Total Balance */}
          <div className="Balance-container__totalBalance">
            <div className='totalBalance'>
              <div className='totalBalance-content'>
                <div className='totalBalance-icon'>
                  <MdOutlineAccountBalanceWallet color='black' size={37} />
                </div>
                <h2>Total Balance</h2>
                <div className='totalBalance-amount'>{currency} {convertCurrency(balanceAmount, 'USD', currency)}</div>
              </div>
              <div className='totalBalance-graph-icon'>
                <BsGraphUpArrow color='black' size={20} />
              </div>
            </div>
          </div>
          {/* Total Income */}
          <div className="Balance-container__totalBalance">
            <div className='totalBalance'>
              <div className='totalBalance-content'>
                <div className='totalBalance-icon'>
                  <MdOutlineAccountBalanceWallet color='black' size={37} />
                </div>
                <h2>Total Income</h2>
                <div className='totalBalance-amount'>{currency} {convertCurrency(incomeAmount, 'USD', currency)}</div>
              </div>
              <div className='totalBalance-graph-icon'>
                <BsGraphUpArrow color='black' size={20} />
              </div>
            </div>
          </div>
          {/* Total Expense */}
          <div className="Balance-container__totalBalance">
            <div className='totalBalance'>
              <div className='totalBalance-content'>
                <div className='totalBalance-icon'>
                  <MdOutlineAccountBalanceWallet color='black' size={37} />
                </div>
                <h2>Total Expense</h2>
                <div className='totalBalance-amount'>{currency} {convertCurrency(expenseAmount, 'USD', currency)}</div>
              </div>
              <div className='totalBalance-graph-icon'>
                <BsGraphUpArrow color='black' size={20} />
              </div>
            </div>
          </div>
        </div>
        <p>Statistics</p>
        <div className='statistics-container'>
          <TransactionChart />
        </div>
        <div className='TransactionHistory-container'>
          <TransactionHistory />
        </div>
      </div>
      <div className='Overview-content-2'>
        <p>My Card</p>
        <div className='Overview-content-2__card-container'>
          <div className="card-logo">
            <FaCcMastercard size={35} color='pink' />
          </div>
          <div className="card-number">
            {showNumber ? cardNumber : maskedNumber}
            <button className="toggle-button" onClick={() => setShowNumber(!showNumber)}>
              {showNumber ? <BiShowAlt /> : <BiSolidHide />}
            </button>
          </div>
          <div className="card-info">
            <div className="card-holder">
              <label>Card Holder</label>
              <div>Nwalozie Kelechukwu</div>
            </div>
            <div className="card-expiry">
              <label>Expires</label>
              <div>12/25</div>
            </div>
          </div>
          <div className="chip">
            <FcSimCardChip size={40} />
          </div>
        </div>
        <div className="budget-overview">
          <div className="income-currency container">
            <div className='income'>
              <div className="label">Monthly Income</div>
              <div className="amount income-amount">{currency} {convertCurrency(500000, 'USD', currency)}</div>
            </div>
            <div className="divider"></div>
            <div className='currency'>
              <div className='label'>Currency</div>
              <div className='currency'>{currency}</div>
            </div>
          </div>
          <div className="budget-spent">
            <div className="budget">
              <div className="label">Monthly Budget Limit</div>
              <div className="amount budget-amount">{currency} {convertCurrency(budgetLimit, 'USD', currency)}</div>
            </div>
            <div className="divider"></div>
            <div className="spent">
              <div className="label">Spent</div>
              <div className="amount spent-amount">{currency} {convertCurrency(expenseAmount, 'USD', currency)}</div>
            </div>
          </div>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${(expenseAmount / budgetLimit) * 100}%` }}></div>
          </div>
          <div>
            <CurrencyConverter/>
          </div>

        </div>
      </div>
    </div>
  );
};

//SideBar.js
import React from 'react';
import PropTypes from 'prop-types';
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { Overview } from '../Overview/Overview';
import { Transaction } from '../Transactions/Transaction';
import { UserProfile } from '../UserProfile/UserProfile';

export const Sidebar = ({ toggleSidebar, handleMenuClick, handleLogout }) => {
  return (
    <div id="sidebar">
      <aside id="sidebar">
        <div className="sidebar-title">
          <div className="sidebar-brand">
            <span className="material-icons-outlined">inventory</span>
            Kelechukwu Space
          </div>
          <span className="material-icons-outlined" onClick={toggleSidebar}>
            close
          </span>
        </div>
        <ul className="sidebar-list">
          <li className="sidebar-list-item" onClick={() => handleMenuClick(<Overview />)}>
            <span className="material-icons-outlined">dashboard</span> Dashboard
          </li>
          <li className="sidebar-list-item" onClick={() => handleMenuClick(<Transaction transactionOperation="income" />)}>
            <span className="material-icons-outlined">
              <FaMoneyBillTrendUp />
            </span>
            Income
          </li>
          <li className="sidebar-list-item" onClick={() => handleMenuClick(<Transaction transactionOperation="expense" />)}>
            <span className="material-icons-outlined">fact_check</span>Expense
          </li>
          <li className="sidebar-list-item" onClick={() => handleMenuClick(<UserProfile />)}>
            <span className="material-icons-outlined">person</span>User Profile
          </li>
          <li className="sidebar-list-item" onClick={handleLogout}>
            <span className="material-icons-outlined">logout</span>Logout
          </li>
        </ul>
      </aside>
    </div>
  );
};

// Add PropTypes and defaultProps for Sidebar
Sidebar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
  handleMenuClick: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired
};

Sidebar.defaultProps = {
  toggleSidebar: () => {},
  handleMenuClick: () => {},
  handleLogout: () => {}
};

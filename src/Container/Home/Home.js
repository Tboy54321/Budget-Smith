// Home.js
import React, { useState } from "react";
import PropTypes from 'prop-types';
import './Home.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BudgetAlerts } from "../Currency/BudgetAlerts";
import { useDispatch } from 'react-redux';
import { logoutUser } from "../../Content/actions";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../Sidebar/SideBar";
import { Overview } from "../Overview/Overview";

export const Home = () => {
  const defaultComponent = <Overview/>
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [selectedComponent, setSelectedComponent] = useState(defaultComponent);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const handleMenuClick = (component) => {
    setSelectedComponent(component);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/home');
  }

  return (
    <div className="angry-grid">
      <div id="header">
        <div className="header-container">
          <button className="menu-icon" onClick={toggleSidebar}>
            <span className="material-icons-outlined">menu</span>
          </button>
          <div className="header-left">
            <span className="material-icons-outlined">search</span>
          </div>
          <div className="header-right">
            <span className="material-icons-outlined">notifications</span>
            <span className="material-icons-outlined" onClick={handleLogout}>logout</span>
            <span className="material-icons-outlined" >account_circle</span>
          </div>
        </div>
      </div>
      <div className="sidebar-container">
      {sidebarVisible && (
        <Sidebar
          toggleSidebar={toggleSidebar}
          handleMenuClick={handleMenuClick}
          handleLogout={handleLogout}
        />
      )}
      </div>
      <div id="main-content">
        {selectedComponent}
        <ToastContainer 
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <BudgetAlerts/>
      </div>
    </div>
  );
};

// Add PropTypes and defaultProps for Home
Home.propTypes = {
  sidebarVisible: PropTypes.bool,
  selectedComponent: PropTypes.node,
  toggleSidebar: PropTypes.func,
  handleMenuClick: PropTypes.func,
  handleLogout: PropTypes.func,
  dispatch: PropTypes.func,
  navigate: PropTypes.func
};

Home.defaultProps = {
  sidebarVisible: true,
  selectedComponent: null,
  toggleSidebar: () => {},
  handleMenuClick: () => {},
  handleLogout: () => {},
  dispatch: () => {},
  navigate: () => {}
};
// BudgetSettings.js
import React, { useState, useContext } from 'react';
import { CurrencyContext } from './CurrencyContext';
import PropTypes from 'prop-types';

export const BudgetSettings = () => {
  // Accessing state and setters from CurrencyContext
  const { budgetLimit, setBudgetLimit, alertThreshold, setAlertThreshold } = useContext(CurrencyContext);

  // Local state management for input fields
  const [newLimit, setNewLimit] = useState(budgetLimit);
  const [newThreshold, setNewThreshold] = useState(alertThreshold);

  // Handlers for updating local state
  const handleLimitChange = (e) => setNewLimit(e.target.value);
  const handleThresholdChange = (e) => setNewThreshold(e.target.value);

  // Handler for saving updated settings
  const handleSave = () => {
    setBudgetLimit(newLimit);
    setAlertThreshold(newThreshold);
  };

  return (
    <div>
      <h2>Budget Settings</h2>
      <label>
        Budget Limit:
        <input type="number" value={newLimit} onChange={handleLimitChange} />
      </label>
      <label>
        Alert Threshold:
        <input type="number" step="0.1" value={newThreshold} onChange={handleThresholdChange} />
      </label>
      <button onClick={handleSave}>Save Settings</button>
    </div>
  );
};

// Prop type validation for BudgetSettings component
BudgetSettings.propTypes = {
  budgetLimit: PropTypes.number,           // Expected number for budgetLimit
  alertThreshold: PropTypes.number,       // Expected number for alertThreshold
  setBudgetLimit: PropTypes.func,          // Expected function for setBudgetLimit
  setAlertThreshold: PropTypes.func,       // Expected function for setAlertThreshold
};

// Default props in case they are not provided
BudgetSettings.defaultProps = {
  budgetLimit: 0,                         // Default value for budgetLimit
  alertThreshold: 0,                      // Default value for alertThreshold
  setBudgetLimit: () => {},               // Default empty function for setBudgetLimit
  setAlertThreshold: () => {},            // Default empty function for setAlertThreshold
};

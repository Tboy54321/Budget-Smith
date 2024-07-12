import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';


const CurrencyContext = createContext();

const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState('USD');
  const [rates, setRates] = useState({});
  const [availableCurrencies, setAvailableCurrencies] = useState([]);
  const [budgetLimit, setBudgetLimit] = useState(1000); // Default budget limit
  // const [currentExpenses, setCurrentExpenses] = useState(0); // Current total expenses
  const [alertThreshold, setAlertThreshold] = useState(0.8); // Default alert threshold (80%)
  // Current total expenses

// Actual API const API_KEY = '9bd9dc552f1b89d6cc3c2acb'

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const API_KEY = '9bd9dc552f1b89d6cc3c2acb'
        const response = await axios.get(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`);
        setRates(response.data.conversion_rates);
        setAvailableCurrencies(Object.keys(response.data.conversion_rates)); // Store the available currencies
      } catch (error) {
        console.error('Error fetching conversion rates:', error);
      }
    };

    fetchRates();
  }, []);

  const convertCurrency = (amount, fromCurrency, toCurrency) => {
    if (!rates[fromCurrency] || !rates[toCurrency]) return amount;
    const convertedAmount = (amount / rates[fromCurrency]) * rates[toCurrency];
    return convertedAmount.toFixed(2);

  };

  
  
  return (
    <CurrencyContext.Provider
      value={{ 
        currency,
        setCurrency,
        convertCurrency,
        availableCurrencies,
        budgetLimit,
        setBudgetLimit,
        // addTransaction,
        alertThreshold,
        setAlertThreshold,
      }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export { CurrencyContext, CurrencyProvider };

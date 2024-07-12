import React, { useContext } from 'react';
import { CurrencyContext } from './CurrencyContext';
import PropTypes from 'prop-types';

/**
 * CurrencySelector component for selecting a currency from available options.
 */
export const CurrencySelector = () => {
  const { currency, setCurrency, availableCurrencies } = useContext(CurrencyContext);

  return (
    <div>
      <label>Select Currency: </label>
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        {availableCurrencies.map((cur) => (
          <option key={cur} value={cur}>
            {cur}
          </option>
        ))}
      </select>
    </div>
  );
};

// PropTypes validation for CurrencySelector component
CurrencySelector.propTypes = {
  currency: PropTypes.string,
  setCurrency: PropTypes.func,
  availableCurrencies: PropTypes.arrayOf(PropTypes.string),
};

// Default props for CurrencySelector component
CurrencySelector.defaultProps = {
  currency: 'USD',
  setCurrency: () => {},
  availableCurrencies: ['USD'],
};

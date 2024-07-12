import React, { useState, useContext } from 'react';
import { CurrencyContext } from './CurrencyContext';
import { CurrencySelector } from './CurrencySelector';
import './CurrencyConverter.css'; // You'll create this CSS file for styling

const CurrencyConverter = () => {
  const { convertCurrency } = useContext(CurrencyContext);
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('NGN');
  const [toCurrency, setToCurrency] = useState('USD');
  const [result, setResult] = useState(null);

  const handleConvert = () => {
    if (amount && fromCurrency && toCurrency) {
      const convertedAmount = convertCurrency(amount, fromCurrency, toCurrency);
      setResult(`${amount} ${fromCurrency} ➔ ${convertedAmount} ${toCurrency}`);
    }
  };

  return (
    <div className="currency-converter">
      <h2>Currency Converter</h2>
      <div className="input-group">
        <label>Enter Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="1000"
        />
      </div>
      <div className="currency-selectors">
        <div className="currency-selector">
          <label>From</label>
          <CurrencySelector currency={fromCurrency} setCurrency={setFromCurrency} />
        </div>
        <div className="swap-icon">⇆</div>
        <div className="currency-selector">
          <label>To</label>
          <CurrencySelector currency={toCurrency} setCurrency={setToCurrency} />
        </div>
      </div>
      <button onClick={handleConvert}>Get Exchange Rate</button>
      {result && <div className="result">{result}</div>}
    </div>
  );
};

export default CurrencyConverter;

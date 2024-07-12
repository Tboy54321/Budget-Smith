import React from 'react';
import { shallow } from 'enzyme';
import { CurrencySelector } from './CurrencySelector';
import { CurrencyContext } from './CurrencyContext';

describe('CurrencySelector Component', () => {
  const mockContext = {
    currency: 'USD',
    setCurrency: jest.fn(),
    availableCurrencies: ['USD', 'EUR', 'GBP'],
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <CurrencyContext.Provider value={mockContext}>
        <CurrencySelector />
      </CurrencyContext.Provider>
    );
  });

  it('should render without errors', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should call setCurrency when a new currency is selected', () => {
    wrapper.find('select').simulate('change', { target: { value: 'EUR' } });
    expect(mockContext.setCurrency).toHaveBeenCalledWith('EUR');
  });
});
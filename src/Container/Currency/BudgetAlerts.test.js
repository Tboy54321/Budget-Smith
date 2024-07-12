// BudgetAlerts.test.js
import React from 'react';
import { shallow } from 'enzyme';
import { BudgetAlerts } from './BudgetAlerts';
import { CurrencyContext } from './CurrencyContext';
import { toast } from 'react-toastify';

jest.mock('react-toastify', () => ({
  toast: {
    warning: jest.fn(),
    error: jest.fn(),
  },
}));

describe('BudgetAlerts Component', () => {
  const mockContext = {
    budgetLimit: 1000,
    alertThreshold: 0.8,
  };

  const mockExpenses = [
    { amount: 500 },
    { amount: 400 },
    { amount: 200 },
  ];

  let wrapper;

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(
      <CurrencyContext.Provider value={mockContext}>
        <BudgetAlerts expenses={mockExpenses} />
      </CurrencyContext.Provider>
    );
  });

  it('should render without errors', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should call toast.warning if expenses are nearing the budget limit', () => {
    expect(toast.warning).toHaveBeenCalledWith('You are approaching your budget limit!');
  });

  it('should call toast.error if expenses exceed the budget limit', () => {
    expect(toast.error).toHaveBeenCalledWith('You have exceeded your budget limit!');
  });
});
// BudgetSettings.test.js
import React from 'react';
import { shallow } from 'enzyme';
import { BudgetSettings } from './BudgetSettings';
import { CurrencyContext } from './CurrencyContext';

describe('BudgetSettings Component', () => {
  const mockContext = {
    budgetLimit: 1000,
    setBudgetLimit: jest.fn(),
    alertThreshold: 0.8,
    setAlertThreshold: jest.fn(),
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <CurrencyContext.Provider value={mockContext}>
        <BudgetSettings />
      </CurrencyContext.Provider>
    );
  });

  it('should render without errors', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should update newLimit state when handleLimitChange is called', () => {
    wrapper.find('input').at(0).simulate('change', { target: { value: 500 } });
    expect(wrapper.find('input').at(0).props().value).toBe(500);
  });

  it('should update newThreshold state when handleThresholdChange is called', () => {
    wrapper.find('input').at(1).simulate('change', { target: { value: 0.5 } });
    expect(wrapper.find('input').at(1).props().value).toBe(0.5);
  });

  it('should call setBudgetLimit and setAlertThreshold when handleSave is called', () => {
    wrapper.find('button').simulate('click');
    expect(mockContext.setBudgetLimit).toHaveBeenCalledWith(1000);
    expect(mockContext.setAlertThreshold).toHaveBeenCalledWith(0.8);
  });
});
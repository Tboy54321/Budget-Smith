// Transaction.test.js
import React from 'react';
import { shallow } from 'enzyme';
import { Transaction } from './Transaction'

describe('Transaction Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Transaction transactionOperation="income" />);
  });

  it('should render without errors', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render income transactions when transactionOperation is income', () => {
    expect(wrapper.find('h1').text()).toEqual('Income Transactions');
  });

  it('should render expense transactions when transactionOperation is expense', () => {
    wrapper.setProps({ transactionOperation: 'expense' });
    expect(wrapper.find('h1').text()).toEqual('Expense Transactions');
  });
});

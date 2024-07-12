// Sidebar.test.js
import React from 'react';
import { shallow } from 'enzyme';
import { Sidebar } from './SideBar';
import { Overview } from '../Overview/Overview';
import { Transaction } from '../Transactions/Transaction';
import { UserProfile } from '../UserProfile/UserProfile';

describe('Sidebar Component', () => {
  let wrapper;
  const mockToggleSidebar = jest.fn();
  const mockHandleMenuClick = jest.fn();
  const mockHandleLogout = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <Sidebar
        toggleSidebar={mockToggleSidebar}
        handleMenuClick={mockHandleMenuClick}
        handleLogout={mockHandleLogout}
      />
    );
  });

  it('should render without errors', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should call toggleSidebar when close button is clicked', () => {
    wrapper.find('.material-icons-outlined').at(1).simulate('click');
    expect(mockToggleSidebar).toHaveBeenCalled();
  });

  it('should call handleMenuClick with Overview component when Dashboard item is clicked', () => {
    wrapper.find('.sidebar-list-item').at(0).simulate('click');
    expect(mockHandleMenuClick).toHaveBeenCalledWith(<Overview />);
  });

  it('should call handleMenuClick with Transaction component when Income item is clicked', () => {
    wrapper.find('.sidebar-list-item').at(1).simulate('click');
    expect(mockHandleMenuClick).toHaveBeenCalledWith(<Transaction transactionOperation="income" />);
  });

  it('should call handleMenuClick with Transaction component when Expense item is clicked', () => {
    wrapper.find('.sidebar-list-item').at(2).simulate('click');
    expect(mockHandleMenuClick).toHaveBeenCalledWith(<Transaction transactionOperation="expense" />);
  });

  it('should call handleMenuClick with UserProfile component when User Profile item is clicked', () => {
    wrapper.find('.sidebar-list-item').at(3).simulate('click');
    expect(mockHandleMenuClick).toHaveBeenCalledWith(<UserProfile />);
  });

  it('should call handleLogout when Logout item is clicked', () => {
    wrapper.find('.sidebar-list-item').at(4).simulate('click');
    expect(mockHandleLogout).toHaveBeenCalled();
  });
});

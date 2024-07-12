// Home.test.js
import React from 'react';
import { shallow } from 'enzyme';
import { Home } from './Home';
import { Sidebar } from './SideBar';

describe('Home Component', () => {
  let wrapper;
  const mockDispatch = jest.fn();
  const mockNavigate = jest.fn();

  jest.mock('react-redux', () => ({
    useDispatch: () => mockDispatch
  }));

  jest.mock('react-router-dom', () => ({
    useNavigate: () => mockNavigate
  }));

  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  it('should render without errors', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should toggle sidebar visibility when menu button is clicked', () => {
    wrapper.find('.menu-icon').simulate('click');
    expect(wrapper.find(Sidebar).exists()).toBe(false);
    wrapper.find('.menu-icon').simulate('click');
    expect(wrapper.find(Sidebar).exists()).toBe(true);
  });

  it('should handle logout correctly', () => {
    wrapper.find('.header-right .material-icons-outlined').at(1).simulate('click');
    expect(mockDispatch).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith('/home');
  });
});

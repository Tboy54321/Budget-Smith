// UserProfile.test.js
import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { shallow } from 'enzyme';
import UserProfile from './UserProfile';
import transactionsReducer from '../../Content/reducers'; // Adjust the path according to your project structure

const store = configureStore({ reducer: transactionsReducer });

describe('UserProfile Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <UserProfile />
      </Provider>
    );
  });

  it('should render without errors', () => {
    expect(wrapper.exists()).toBe(true);
  });
});

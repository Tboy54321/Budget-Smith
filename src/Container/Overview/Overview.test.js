// Overview.test.js
import React from 'react';
import { shallow } from 'enzyme';
import { Overview } from './Overview';

describe('Overview Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Overview />);
  });

  it('should render without errors', () => {
    expect(wrapper.exists()).toBe(true);
  });
});

import LoginForm from './LoginForm';
import React from 'react';
import { shallow } from 'enzyme';

describe('LoginForm', () => {
  let wrapper;
  beforeEach(() => {
    const wrapper = shallow(
      <LoginForm 
      
      />
    )
  })

  it('should match the snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
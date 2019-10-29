import React from 'react';
import { NavBar, mapStateToProps, mapDispatchToProps } from './NavBar';
import { shallow } from 'enzyme';

describe('NavBar', () => {
  it('should match a snapshot', () => {
    const wrapper = shallow(
      <NavBar />
    )
  expect(wrapper).toMatchSnapshot()  
  })
})

describe('mapStateToProps in NavBar', () => {
  it('should show the user\'s login status', () => {
    const mockState = {
      isLoggedIn: true,
      logIn: 'LOGIN'
    }
    const expected = {
      isLoggedIn: true
    }

    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected)
  })
})
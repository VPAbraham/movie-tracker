import { LoginForm, mapStateToProps } from './LoginForm';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { Redirect } from 'react-router-dom'



describe('LoginForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <LoginForm 
      />)
  })
  
  it('should match the snapshot with all data passed in', () => {

    expect(wrapper).toMatchSnapshot()
  });
  it('should call loginUser when button is clicked', () => {

    wrapper.instance().loginUser = jest.fn()
    const mockEvent = { preventDefault: jest.fn()}

    wrapper.instance().forceUpdate();

    wrapper.find('button').simulate('click', mockEvent)

    expect(wrapper.instance().loginUser).toHaveBeenCalled()

  });
  it('should update state when handleChange is invoked', () => {
    const mockEvent = {target: {name: 'name', value: 'Victor'}}
    const expected = 'Victor'

    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state('name')).toEqual(expected)
  });
  it('should redirect to home if the user is successfully logged in', () => {
    let wrapper = mount(
      <MemoryRouter initialEntries={['/login']}>
        <Redirect to={'/'}/>
      </MemoryRouter>
    )

    expect(wrapper.find(Redirect)).toHaveLength(1)
  })
})

describe('mapStateToProps in LoginForm', () => {
  it('should return an object with user info', () => {
    const mockState = {
      user: {
        name: 'Eric',
        email: 'Eric@gmail.com',
        password: 'Eric234'
      },
      saveUser: 'SAVE_USER'
    }

    const expected = {
      user: {
        name: 'Eric',
        email: 'Eric@gmail.com',
        password: 'Eric234'
      }
    }

    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected)
  })
})
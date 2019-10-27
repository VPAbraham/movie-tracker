import NewUserForm from './NewUserForm';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { Redirect } from 'react-router-dom'
import { MemoryRouter } from 'react-router';



describe('NewUserForm', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <NewUserForm
      />
    )
  })

  it('should match the snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot()
  });
  it('should call submitNewUserInfo when the button is clicked', () => {

    wrapper.instance().submitNewUserInfo = jest.fn()
    const mockEvent = { preventDefault: jest.fn() }

    wrapper.instance().forceUpdate();

    wrapper.find('button').simulate('click', mockEvent)

    expect(wrapper.instance().submitNewUserInfo).toHaveBeenCalled()
  });
  it('should update state when handleChange is invoked', () => {
    const mockEvent = {target: {name: 'name', value: 'Eric'}}
    const expected = 'Eric'

    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state('name')).toEqual(expected)
  });
  it('should redirect to login if the user is successfully added', () => {
    let wrapper = mount(
      <MemoryRouter initialEntries={['/new-user']}>
        <Redirect to={'/login'}/>
      </MemoryRouter>
    )

    expect(wrapper.find(Redirect)).toHaveLength(1)
  })
})
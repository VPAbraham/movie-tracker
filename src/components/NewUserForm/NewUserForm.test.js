import NewUserForm from './NewUserForm';
import React from 'react';
import { shallow } from 'enzyme';

describe('NewUserForm', () => {
  let wrapper;
  beforeEach(() => {
    const wrapper = shallow(
      <NewUserForm
      />
    )
  })

  it('should match the snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
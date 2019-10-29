import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';

describe('Card', () => {
  let wrapper;
  beforeEach(() => {
     wrapper = shallow(
      <Card 
      key={4}
      poster='https://image.tmdb.org/t/p/w342$'
      title='Batman'
      favorited='false'
      />
    )
  })
  it('should match the snapshot with with all data passed in', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
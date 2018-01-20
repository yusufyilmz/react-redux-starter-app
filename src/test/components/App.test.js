import React from 'react';
import App from 'components/App';
import { expect } from 'chai'
import { shallow } from 'enzyme'

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('has a header', () => {
    expect(wrapper.find('.navbar')).to.exist;
  });

  it('has a user list', () => {
    expect(wrapper.find('.user-list')).to.exist;
  });
});

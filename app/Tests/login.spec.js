import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import Login from '../components/home';


describe('<Login />', () => {
  const props = Login.responseGoogle;
  const wrapper = shallow(<Login  { ...props} />);
  it('Should have a div that renders the sign in page',() => {
    expect(wrapper.find('row')).to.be.defined;
  });
  it('Should have a function that stores user profile', () => {
    wrapper.instance().props;
  });
  it('Should have localStorage present for storing data', () => {
    expect(wrapper.find('localStorage.setItem()')).to.be.a('object');
  });
})

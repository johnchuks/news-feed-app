import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import Headlines from '../components/headlines';
import Signout from '../components/Header';

describe('<HeadLines />', () => {
  const props = {
    match: {
      params: {
        sortBy: 'top',
        source: 'espn',
      },
    },

  };
  const wrapper = shallow(<Headlines {...props} />);
  it('Should have the Signout component', () => {
    expect(wrapper.find(Signout)).to.have.length(1);
  });
  it('Should have a state for sortby', () => {
    expect(wrapper.state().sortBy).to.be.a('string');
  });
  it('Should have an initial sourceId state', () => {
    expect(wrapper.state().sourceId).to.be.a('string');
  });
  it('Should have a button to sort between top and latest', () => {
    expect(wrapper.find('button')).to.have.length(1);
  });
  it('Renders the headline component', () => {
    expect(wrapper.find('.container')).to.be.defined;
  });
  it('Should have a did mount function', () => {
    wrapper.instance().componentWillMount();
  });
  it('Should have a function that updates the articles', () => {
    wrapper.instance().updateArticles;
  });
  it('Should have function that handles the sortBy onclick event', () => {
    expect(wrapper.find('#sort')).to.be.defined;
  });
  it('Should have a function that sorts the articles', () => {
    let update = mount(<Headlines {...props} />);
  });
});


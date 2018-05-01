import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Sources from '../components/sources';
import Signout from '../components/Header';


describe('<Sources/>', () => {
  const props = {
    sources: [{
      id: 'abc-news-au',
      description: 'We bring the best news from Australia',
      name: 'ABC-NEWS-AUr'
    }

    ]
  }
  const wrapper = shallow(<Sources />);
  it('Should have the signout component', () => {
    expect(wrapper.find(Signout)).to.have.length(1);
  });
  it('Should have an initial state for search string', () => {
    expect(wrapper.state().searchString).to.equal('');
  });
  it('Should have an updated source state', () => {
    expect(wrapper.setState().sources).to.have.length.not.to.equal(0);
  });
  it('Should have an updated searchString state', () => {
    const wrapper = shallow(<Sources />);
    expect(wrapper.setState().sources).to.have.length.not.to.equal(0);
  });
  it('Should have a component did mount function', () => {
    const wrapper = shallow(<Sources />);
    wrapper.instance().componentDidMount();
  });
  it('Should have a component will unmount function', () => {
    wrapper.instance().componentWillUnmount();
  });
  it('Should have a button that handles onClick event', () => {
    expect(wrapper.find('button')).to.be.defined;
  });
  it('should have a div that renders the JSX on the DOM', () => {
    expect(wrapper.find('.container')).to.be.defined;
  });
  it('should have a textfield in the component for searching', () => {
    expect(wrapper.find('.input-field')).to.be.defined;
  });

});

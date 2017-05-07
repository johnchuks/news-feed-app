import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';

import Sources from '..components/sources';

describe('<Sources/>', () => {
    it ('Should have an initial source state',()=> {
        const wrapper = mount(<Sources/>);
        expect(wrapper.state().sources).to.be.an('array');     
    });
    it ('Should have an initial state for search string', () => {
        const wrapper = mount(<Sources/>);
        expect(wrapper.state().searchString).to.equal('');
    });
    it ('Should have an updated source state', () => {
        const wrapper = mount(<Sources/>);
        expect(wrapper.setState().sources).to.have.length.not.to.equal(0);
    })
    it ('Should have an updated searchString state', () => {
        const wrapper = mount(<Sources/>);
        expect(wrapper.setState().sources).to.have.length.not.to.equal(0);
    })
    it ('Should have an event handler to handle real time search', () => {
        const wrapper = mount(<Sources/>);
        expect(wrapper.handleChange()).to.be.defined;
    });
    it ('Should have a mounting and unmounting function present',() =>{
        const wrappper = mount(<Sources/>);
        expect(wrapper.componentWillMount()).to.be.defined;
        expect(wrapper.componentWillUnMount()).to.be.defined;
    });
    it('Should have a function that changes the state of the new sources',() =>{
        const wrapper = shallow(<Sources/>);
        expect(wrapper.updateNewsFeed()).to.be.defined;
    }); 
});
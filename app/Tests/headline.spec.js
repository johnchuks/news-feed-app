import React from 'react';
import { mount, shallow } from 'enzymes';
import { expect } from 'chai';

import HeadLines from '../components/headlines.jsx';

describe (<HeadLines/>, () => {
    it ('Should have a state for sourcesId', () => {
        const wrapper = mount(<HeadLines/>);
        expect(wrapper.state().sourceId).to.be.a('string');
    })
    it ('Should have a state for sortby', () => {
        const wrapper = mount(<HeadLines/>);
        expect(wrapper.state().sortBy).to.be.a('string');
    })
    it ('Should have an initial articles state', () => {
        const wrapper = mount(<HeadLines/>);
        expect(wrapper.state().articles).to.be.a('array');
    })
    it ('Should have an updated article state', () => {
        const wrapper = mount(<HeadLines/>);
        expect(wrapper.setState().articles).to.have.a.length.greatThan(0);
    })
    it('Should have a mount and Unmount function for rendering', ()=> {
        const wrapper = mount(<HeadLines/>);
        expect(wrapper.componentWillMount()).to.be.defined;
        expect(wrapper.componentWillUnMount()).to.be.defined;
    })
})



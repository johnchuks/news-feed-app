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
        expect(wrapper.state().articles).to.be.an('array');
    })
    it ('Should have an updated article state', () => {
        const wrapper = mount(<HeadLines/>);
        expect(wrapper.setState().articles).to.have.a.length.not.equal(0);
    })
})



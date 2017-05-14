import React from 'react';
import { expect } from 'chai';
import * as Actions from '../action/NewsAction';
import Dispatcher from '../dispatcher/dispatcher';
import MockAdapter from 'axios-mock-adapter';
import apiCall from './mockData';
import axios from 'axios';
import sinon from 'sinon';

const dispatcher = sinon.spy(Dispatcher, 'dispatch');

describe('Make an API call', () => {
  const mock = new MockAdapter(axios);
  it('Should return a mock data from the api call', () => {
    expect(mock.onGet('/apiCall').reply()).to.be.called;
  });
});

describe('getSources action method using Promises', () => {
  it('should have the dispatcher is called ', (done) => {
    Actions.getSources;
    setTimeout(() => {
      expect(dispatcher).to.have.been.called;
      done();
    }, 0);
  });

  it('Should get the news source event when called', () => {
    Actions.getSources;
    setTimeout(() => {
      expect(dispatcher, {
        type: 'GET_SOURCES',
        data: 'result',
      });
      done();
    }, 0);
  });
});

describe('Get news headline action method with promises', () => {
  it('should have the dispatcher called', () => {
    Actions.newsHeadlines;
    setTimeout(() => {
      expect(dispatcher).to.have.been.called;
      done();
    });
  }, 0);

  it('Should get the news articles when called', () => {
    Actions.newsHeadlines;
    setTimeout(() => {
      expect(dispatcher, {
        type: 'GET_ARTICLES',
        data: articles,
      });
      done();
    }, 0);
  });
});


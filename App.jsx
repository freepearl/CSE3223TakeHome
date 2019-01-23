import React, { Component }  from 'react';
import { Provider } from 'react-redux';
import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import { push,routerForBrowser, initializeCurrentLocation,initialState, Fragment, RoutedfdfdsfsdfProvider, Link } from 'redux-little-router';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import Store from '../../imports/redux/store/store.js';
import Home from './Home.jsx';

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <div>
          <Home />
        </div>
      </Provider>
    );
  }
}

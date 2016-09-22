'use strict'

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import TabBar from './TabBar';


const store = configureStore()


export default class SearchApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <TabBar />
      </Provider>
    );
  }
}

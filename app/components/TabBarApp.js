'use strict'

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import TabBarRoot from '../containers/TabBarRoot';


const store = configureStore()


export default class SearchApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <TabBarRoot />
      </Provider>
    );
  }
}

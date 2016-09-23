'use strict'

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AV from 'leancloud-storage';

import configureStore from '../store/configureStore';
import TabBarRoot from '../containers/TabBarRoot';


const store = configureStore()

// 初始化
const appId = '7bQ0yQahIWdwXMimQIwdDhJC-gzGzoHsz';
const appKey = 'WtaO7hx9Abj51SlO2MK4y9B7';
const region = 'cn';
AV.init({ appId, appKey, region });
AV.Promise.setPromisesAPlusCompliant(true);


export default class SearchApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <TabBarRoot />
      </Provider>
    );
  }
}

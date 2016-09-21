'use strict'

/**
 * Sample React Native and Redux
 * https://github.com/yaodianmi/Work5Leancloud
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './app/store/configureStore';
import App from './app/app';


const store = configureStore()


class Work5Leancloud extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}


AppRegistry.registerComponent('Work5Leancloud', () => Work5Leancloud);

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c086f1368f28eb905a5b8ded9da1d9bfc68cd915
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
<<<<<<< HEAD
=======
=======
'use strict'

/**
 * Sample React Native and Redux
 * https://github.com/yaodianmi/Work5Leancloud
>>>>>>> 10822f00f17365d92970fc1e63fa51d0377bb90d
>>>>>>> c086f1368f28eb905a5b8ded9da1d9bfc68cd915
 */

import React, { Component } from 'react';
import {
  AppRegistry,
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c086f1368f28eb905a5b8ded9da1d9bfc68cd915
  StyleSheet,
  Text,
  View
} from 'react-native';
<<<<<<< HEAD
=======
=======
} from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './app/store/configureStore';
import App from './app/app';

const store = configureStore()
>>>>>>> 10822f00f17365d92970fc1e63fa51d0377bb90d
>>>>>>> c086f1368f28eb905a5b8ded9da1d9bfc68cd915

class Work5Leancloud extends Component {
  render() {
    return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c086f1368f28eb905a5b8ded9da1d9bfc68cd915
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
<<<<<<< HEAD
=======
=======
      <Provider store={store}>
        <App />
      </Provider>
>>>>>>> 10822f00f17365d92970fc1e63fa51d0377bb90d
>>>>>>> c086f1368f28eb905a5b8ded9da1d9bfc68cd915
    );
  }
}

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c086f1368f28eb905a5b8ded9da1d9bfc68cd915
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

<<<<<<< HEAD
=======
=======
>>>>>>> 10822f00f17365d92970fc1e63fa51d0377bb90d
>>>>>>> c086f1368f28eb905a5b8ded9da1d9bfc68cd915
AppRegistry.registerComponent('Work5Leancloud', () => Work5Leancloud);

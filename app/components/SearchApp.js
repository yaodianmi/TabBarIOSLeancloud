'use strict'

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Navigator,
  Platform,
  TouchableOpacity
} from 'react-native';
import {
    connect
} from 'react-redux';

import SearchScreenRoot from '../containers/SearchScreenRoot';
import BookScreen from './BookScreen';
import Login from './Login';


const NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    if (index === 0  || route.name == 'login') {
    	return null
    }

    const previousRoute = navState.routeStack[index - 1]
    return (
      <TouchableOpacity
        onPress={() => navigator.pop()}
        style={styles.navBarLeftButton}>
        <Text style={styles.navBarText}>
          &laquo; {(index === 1)  ? '图书详情' : '返回'}
        </Text>
      </TouchableOpacity>
    )
  },

  RightButton(route, navigator, index, navState) {
  	return null
  },

  Title(route, navigator, index, navState) {
    return (
      <Text style={[styles.navBarText, styles.navBarTitleText]}>
        {route.title}
      </Text>
    )
  }
}

const logIn = (navigator) => {
  navigator.push({
    name: 'login'
  });
}

export default class SearchApp extends Component {
  renderScene(route, navigator){
    if(route.name == 'login') {
      return (
        <Login
          navigator={navigator}
          isLogin={this.props.tab.isLogin}
          username={this.props.tab.username}
          password={this.props.tab.password}
          actions={this.props.actions}/>
      )
    } else if(route.name == 'book_detail') {
      return <BookScreen book={route.book} navigator={navigator}/>
    } else {
      return <SearchScreenRoot navigator={navigator} tag={route.tag} logIn={()=>logIn(navigator)}/>;
    }
  }

  render(){
    return (
      <Navigator
        initialRoute={{name:'home', title:'首页', tag:'灵魂幸存者'}}
        renderScene={this.renderScene.bind(this)}
        navigationBar={
          <Navigator.NavigationBar
            style={styles.navBar}
            routeMapper={NavigationBarRouteMapper} />
        }
        configureScene={(route, routeStack) => Navigator.SceneConfigs.FadeAndroid}
        />
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: 'white',
    height:50
  },
  navBarText: {
    fontSize: 16,
    marginVertical: 10,
  },
  navBarTitleText: {
    fontWeight: '500',
    marginVertical: 9,
  },
  navBarLeftButton: {
    paddingLeft: 10,
  },
  navBarRightButton: {
    paddingRight: 10,
  },
});

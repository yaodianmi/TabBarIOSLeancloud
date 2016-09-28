'use strict'

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TabBarIOS,
} from 'react-native';

import SearchApp from './SearchApp';
import Favorite from './Favorite';
import Login from './Login';


export default class TabBar extends Component {
  constructor(props){
    super(props);
  }

  _renderFavorites() {
    console.log(this.props.actions);
    return <Favorite />
    /*if (this.props.tab.isLogin) {
      return <Favorite />
    } else {
      return (
        <Login
          isLogin={this.props.tab.isLogin}
          username={this.props.tab.username}
          password={this.props.tab.password}
          actions={this.props.actions}/>
      )
    }*/
  }

  _renderAbout() {
    return (
      <View style={styles.tabContent}>
        <Text style={styles.aboutText}>Programm：With TabBarIOS and Leancloud for work.</Text>
        <Text style={styles.aboutText}>Author：Titos Mi</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Text style={styles.welcome}>
          Work5Leancloud
        </Text>
        <TabBarIOS
            style={{flex:1,alignItems:'flex-end'}}
            tintColor='white'
            barTintColor='#072'>
          <TabBarIOS.Item
              title='搜索'
              systemIcon='search'
              selected={this.props.tab.selectedTab === 'search'}
              onPress={() => {
                this.props.actions.selectTab('search');
              }}
          >
            <SearchApp tab={this.props.tab} actions={this.props.actions}/>
          </TabBarIOS.Item>
          <TabBarIOS.Item
              systemIcon='favorites'
              selected={this.props.tab.selectedTab === 'favorites'}
              onPress={() => {
                this.props.actions.selectTab('favorites');
              }}
          >
            {this._renderFavorites()}
          </TabBarIOS.Item>
          <TabBarIOS.Item
              systemIcon='more'
              selected={this.props.tab.selectedTab === 'about'}
              onPress={() => {
                this.props.actions.selectTab('about');
              }}
          >
            {this._renderAbout()}
          </TabBarIOS.Item>
        </TabBarIOS>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
  aboutText: {
    margin: 50,
  },
});

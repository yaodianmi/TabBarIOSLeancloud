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


export default class TabBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedTab: '关于',
    };
  }

  _renderAbout() {
    return (
      <View style={styles.tabContent}>
        <Text style={styles.aboutText}>程序：With TabBarIOS and Leancloud for work.</Text>
        <Text style={styles.aboutText}>作者：米尧</Text>
        <Text style={styles.aboutText}>志向：是去福音未得之地传福音（罗15:20）。</Text>
        <Text style={styles.aboutText}>人生目标：是认识基督，晓得他复活的大能，并且晓得和他一同受苦，效法他的死（腓3:10）。</Text>

      </View>
    );
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Text style={styles.welcome}>
          Work5Leancloud（Titos Mi）
        </Text>
        <TabBarIOS
            style={{flex:1,alignItems:"flex-end"}}
            tintColor="white"
            barTintColor="#072">
          <TabBarIOS.Item
              title="搜索"
              systemIcon="search"
              selected={this.state.selectedTab === '搜索'}
              onPress={() => {
                this.setState({
                  selectedTab: '搜索',
                });
              }}
          >
            <SearchApp />
          </TabBarIOS.Item>
          <TabBarIOS.Item
              systemIcon="favorites"
              selected={this.state.selectedTab === '收藏夹'}
              onPress={() => {
                this.setState({
                  selectedTab: '收藏夹',
                });
              }}
          >
            <Favorite />
          </TabBarIOS.Item>
          <TabBarIOS.Item
              systemIcon="more"
              selected={this.state.selectedTab === '关于'}
              onPress={() => {
                this.setState({
                  selectedTab: '关于',
                });
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

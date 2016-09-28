'use strict'

import React, { Component } from 'react';
import {
  View,
  Text,
  ListView,
  StyleSheet
} from 'react-native';
import AV from 'leancloud-storage';

import BookCell from './BookCell';


export default class Favorite extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    };
  }

  renderRow(book, sectionID, rowID) {
    alert('renderRow');
    console.log(book);
    return (
      <BookCell
        key={book.id}
        book={book}
      />
    );
  }

  render() {
    let query = new AV.Query('Book');
    query.find().then(function (books) {
      console.log('Query Book:', books);
      this.setState({
  			dataSource: this.ds.cloneWithRows(books)
  		});
    }, function (error) {
      console.log("Query Book Error: ", error);
    });
    alert('haha');
    return (
      <View>
        <ListView
          ref="listview"
          dataSource={this.state.dataSource}
          renderRow={(rowData) => this.renderRow(rowData)}
          automaticallyAdjustContentInsets={false}
          keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps={true}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
  },
  bookTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 2,
  },
  row: {
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 5,
  },
  cellImage: {
    backgroundColor: '#dddddd',
    height: 93,
    marginRight: 10,
    width: 60,
  },
});

'use strict'

import React, { Component } from 'react';
import {
  View,
  Text,
  ListView,
  StyleSheet
} from 'react-native';
import AV from 'leancloud-storage';


export default class Favorite extends Component {
  constructor(props) {
    super(props);
    let ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})
    this.state = {
      dataSource: ds.cloneWithRows(this._genRows()),
    };
  }

  _genRows() {
    console.log('Favorite|componentDidMount:');
    let tmpBooks = [];

    new AV.Query('Book').find().then(function (books) {
      books.filter((book)=>{
        tmpBooks.push(book.attributes);
      });
      console.log('tmpBooks: ', tmpBooks);
    }, function (error) {
      console.log("Query Book Error: ", error);
    });

    return tmpBooks
  }

  renderRow(book, sectionID, rowID) {
    alert('renderRow');
    return (
      <View key={book.bid} style={styles.row}>
        <Image
          source={{uri: book.image}}
          style={styles.cellImage}
        />
        <View style={styles.textContainer}>
          <Text style={styles.bookTitle}>{book.title}</Text>
          <Text style={styles.bookTitle}>{book.author}</Text>
          <Text style={styles.bookTitle}>{book.star}</Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        enableEmptySections={true}
      />
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

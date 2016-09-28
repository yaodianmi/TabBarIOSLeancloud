
import React, { Component } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  ToastAndroid,
  AlertIOS
} from 'react-native';
import AV from 'leancloud-storage';

import Login from './Login';


export default class BookScreen extends Component {
  constructor(props) {
    super(props);
  }

  _tagsToText() {
    let tgs = [];
    let tags = this.props.book.tags
    for (let i in tags) {
      tgs.push(tags[i].name);
    }
    return (
      `标签: ${tgs.join('|')}`
    )
  }

  _collect() {
    if (true || this.props.tab.isLogin) {
      let Book = AV.Object.extend('Book');
      let book = new Book();
      book.set('image', this.props.book.image);
      book.set('title', this.props.book.title);
      book.set('author', this.props.book.author);
      book.set('star', this.props.book.rating.average);
      book.save().then(function (book) {
        console.log('Collect Book, objectId is ', book.id);
        if (Platform.OS === 'android') {
          ToastAndroid.show('收藏成功！你可以去Favorites查看你所收藏的书籍！', ToastAndroid.SHORT)
        } else {
          AlertIOS.alert(
            '收藏成功！你可以去Favorites查看你所收藏的书籍！',
            null,
            [
              {text: 'OK'},
            ]
          );
        }
      }, function (error) {
        console.log("Collect Error: ", error);
        if (Platform.OS === 'android') {
          ToastAndroid.show(error.message, ToastAndroid.LONG);
        } else {
          AlertIOS.alert(
            error.message,
            null,
            [
              {text: 'OK'},
            ]
          );
        }
      });
    } else {
      <Login
        isLogin={this.props.tab.isLogin}
        username={this.props.tab.username}
        password={this.props.tab.password}
        actions={this.props.actions}/>
    }
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.mainSection}>
          <Image
            source={{uri: this.props.book.image}}
            style={styles.detailsImage}
          />
          <View style={styles.rightPane}>
            <Text style={styles.movieTitle}>{this.props.book.title}</Text>
            <Text>{this.props.book.author}</Text>
            <View style={styles.mpaaWrapper}>
              <Text style={styles.mpaaText}>
                {this.props.book.rating.average}
              </Text>
            </View>
            <View style={styles.mpaaWrapper}>
              <TouchableOpacity
                onPress={this._collect.bind(this)}>
                <Text style={styles.mpaaText}>
                  收藏
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.separator} />
        <Text>
          {this.props.book.summary}
        </Text>
        <View style={styles.separator} />
        <Tags
          key={this.props.book.id}
          tags={this.props.book.tags}
          navigator={this.props.navigator}
        />
      </ScrollView>
    );
  }
}

class Tags extends Component {
  constructor(props) {
    super(props);
  }

  selectTag(tag) {
    this.props.navigator.push({
      name: 'tag',
      title: tag.title,
      tag: tag.name
    });
  }

  render() {
    if (!this.props.tags) {
      return null;
    }

    return (
      <View>
        {this.props.tags.map(tag =>
          <TagCell
            key={tag.name}
            onSelect={() => this.selectTag(tag)}
            tag={tag}
          />
        )}
      </View>
    );
  }
}

class TagCell extends Component {
  render() {
    let TouchableElement = TouchableHighlight;
    if (Platform.OS === 'android') {
      TouchableElement = TouchableNativeFeedback;
    }

    return (
      <View>
        <TouchableElement
          key={this.props.tag.name}
          onPress={this.props.onSelect}>
          <View style={styles.mpaaWrapper}>
            <Text
              key={this.props.tag.name}
              style={styles.mpaaText}>
              {this.props.tag.name}
            </Text>
          </View>
        </TouchableElement>
      </View>
    )
  }
}


var styles = StyleSheet.create({
  contentContainer: {
    padding: 10,
  },
  rightPane: {
    justifyContent: 'space-between',
    flex: 1,
  },
  movieTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
  },
  rating: {
    marginTop: 10,
  },
  ratingTitle: {
    fontSize: 14,
  },
  ratingValue: {
    fontSize: 28,
    fontWeight: '500',
  },
  mpaaWrapper: {
    alignSelf: 'flex-start',
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 3,
    marginVertical: 5,
  },
  mpaaText: {
    fontFamily: 'Palatino',
    fontSize: 13,
    fontWeight: '500',
    color: 'green',
  },
  mainSection: {
    flexDirection: 'row',
  },
  detailsImage: {
    width: 134,
    height: 200,
    backgroundColor: '#eaeaea',
    marginRight: 10,
  },
  separator: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    height: StyleSheet.hairlineWidth,
    marginVertical: 10,
  },
});

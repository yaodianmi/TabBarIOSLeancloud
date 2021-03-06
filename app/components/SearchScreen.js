
import React, { Component } from 'react';
import {
  ActivityIndicator,
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Image,
  ListView,
  Platform,
} from 'react-native';
import {
    connect
} from 'react-redux';
import {
    bindActionCreators
} from 'redux';
import debounce from 'debounce';
import AV from 'leancloud-storage';

import SearchBar from './SearchBar';
import BookCell from './BookCell';
import {
  hasMore,
} from '../actions/search';



const doubanApiBookSearch = 'https://api.douban.com/v2/book/search'


class Logo extends Component{
  render(){
    return (
      <Image
        source={require('../images/doubanImgLogo.png')}
        style={styles.logo}
      />
    );
  }
}

class NoBooks extends Component {
  render() {
    let text = '';
    if (this.props.filter) {
      text = `没有与"${this.props.filter}"相关的书籍`;
    } else if (!this.props.isLoading) {
      text = '还没有书籍';
    }

    return (
      <View style={[styles.container, styles.centerText]}>
        <Text style={styles.noBooksText}>{text}</Text>
      </View>
    );
  }
}


export default  class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    };
  }

  componentDidMount() {
    console.log('SearchScreen|componentDidMount: check login');
    AV.User.currentAsync().then((currentUser) => {
      console.log('currentUser: ', currentUser);
      if (currentUser) {
        this.props.tabActions.login(this.props.tab.username, this.props.tab.password);
        if (this.props.tag) {
          this.props.actions.runSearch(this.props.tag, 'tag');
        }
      } else {
        this.props.logIn();
      }
    }, (e)=>console.log(e));
    console.log('SearchScreen|componentDidMount: check login end', AV.User.currentAsync());
  }

  componentWillReceiveProps(nextProps) {
    console.log('SearchScreen|componentWillReceiveProps:');
    console.log(nextProps);
		this.setState({
			dataSource: this.ds.cloneWithRows(nextProps.search.books)
		});
	}

  onSearchChange(event) {
    let filter = event.nativeEvent.text.toLowerCase();
    let { actions } = this.props;
    actions.runSearch(filter, undefined);
  }

  onSwitchChange(value){
    let { actions } = this.props;
    actions.set8Star(value);
  }

  onEndReached() {
    let query = this.props.search.filter;

    if (!hasMore(query) || this.props.search.isLoadingTail) {
      // We're already fetching or have all the elements so noop
      return;
    }

    let { actions } = this.props;
    if (this.props.tag) {
      actions.moreBooks(query, 'tag');
    } else {
      actions.moreBooks(query, undefined);
    }
  }

  selectBook(book) {
    this.props.navigator.push({
      name: 'book_detail',
      title: book.title,
      book: book
    });
  }

  renderFooter() {
    let query = this.props.search.filter;

    if (!hasMore(query) || !this.props.search.isLoadingTail) {
      return <View style={styles.scrollSpinner} />;
    }

    return <ActivityIndicator style={styles.scrollSpinner} />;
  }

  renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
    let style = styles.rowSeparator;
    if (adjacentRowHighlighted) {
        style = [style, styles.rowSeparatorHide];
    }
    return (
      <View key={'SEP_' + sectionID + '_' + rowID}  style={style}/>
    );
  }

  renderRow(book, sectionID, rowID) {
    if(this.props.search.is8Star && book.rating.average < 8.0){
      return false;
    } else {
      return (
        <BookCell
          key={book.id}
          onSelect={() => this.selectBook(book)}
          book={book}
        />
      );
    }
  }

  render() {
    let content = this.state.dataSource.getRowCount() === 0 ?
      <NoBooks
        filter={this.props.search.filter}
        isLoading={this.props.search.isLoading}
      /> :
      <ListView
        ref="listview"
        is8Star={this.props.search.is8Star}
        renderSeparator={this.renderSeparator}
        dataSource={this.state.dataSource}
        renderFooter={this.renderFooter.bind(this)}
        renderRow={(rowData) => this.renderRow(rowData)}
        onEndReached={this.onEndReached.bind(this)}
        automaticallyAdjustContentInsets={false}
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps={true}
        showsVerticalScrollIndicator={false}
      />;

    return (
      <View style={styles.container}>
        <Logo />
        <SearchBar
          filter={this.props.search.filter}
          is8Star={this.props.search.is8Star}
          onSearchChange={this.onSearchChange.bind(this)}
          runSearch={this.props.actions.runSearch}
          onSwitchChange={this.onSwitchChange.bind(this)}
          isLoading={this.props.search.isLoading}
          tag={this.props.tag}
          onFocus={() =>
            this.refs.listview && this.refs.listview.getScrollResponder().scrollTo({ x: 0, y: 0 })}
        />
        <View style={styles.separator} />
        {content}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  centerText: {
    alignItems: 'center',
  },
  noBooksText: {
    marginTop: 80,
    color: '#888888',
  },
  logo: {
    width: 153,
    height: 30,
    marginTop: 70,
  },
  separator: {
    height: 1,
    backgroundColor: '#eeeeee',
  },
  scrollSpinner: {
    marginVertical: 20,
  },
  rowSeparator: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    height: 1,
    marginLeft: 4,
  },
  rowSeparatorHide: {
    opacity: 0.0,
  },
});

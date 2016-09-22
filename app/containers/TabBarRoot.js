'use strict'

import {
    bindActionCreators
} from 'redux';
import {
    connect
} from 'react-redux';

import * as actionCreators from '../actions/tab';
import TabBar from '../components/TabBar';


const mapStateToProps = (state) => {
  return {
    tab: state.tab,
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actionCreators, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TabBar)

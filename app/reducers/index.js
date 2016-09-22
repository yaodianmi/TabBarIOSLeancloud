'use strict'

import {
  combineReducers
}
from 'redux';
import search from './search';
import tab from './tab';

const rootReducer = combineReducers({
  search,
  tab
})

export default rootReducer

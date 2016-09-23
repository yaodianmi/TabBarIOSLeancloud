'use strict'

import {
	SELECTED_TAB,
	LOGIN,
} from '../constants/ActionTypes';

const initialSearchState = {
	selectedTab: 'search',
	isLogin: false,
	username: 'guest',
	password: 'guest',
}

const tab = (state = initialSearchState, action) => {
	switch(action.type) {
    case SELECTED_TAB:
    	return Object.assign({}, state, {selectedTab: action.tab});
		case LOGIN:
			return Object.assign({}, state, {isLogin: true});
    default:
    	return state;
	}
};

export default tab

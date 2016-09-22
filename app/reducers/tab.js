'use strict'

import {
	SWITCH_TAB,
} from '../constants/ActionTypes';

const initialSearchState = {
	selectedTab: 'search',
}

const tab = (state = initialSearchState, action) => {
	switch(action.type) {
    case SWITCH_TAB:
    	return Object.assign({}, state, {selectedTab: action.tab});
    default:
    	return state;
	}
};

export default tab

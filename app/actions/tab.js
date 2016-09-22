'use strict'

import {
	SWITCH_TAB,
} from '../constants/ActionTypes';


// actionCreators
export const switchTab = (tab) => (dispatch) => _switchTab(dispatch, tab)

const _switchTab = (dispatch, tab) => {
	dispatch(_switchStarted(tab));
}

const _switchStarted = (tab) => ({type: SWITCH_TAB, tab})

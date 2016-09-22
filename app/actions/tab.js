'use strict'

import {
	SELECTED_TAB,
} from '../constants/ActionTypes';


// actionCreators
export const selectTab = (tab) => (dispatch) => _selectTab(dispatch, tab)

const _selectTab = (dispatch, tab) => {
	dispatch(_selectStarted(tab));
}

const _selectStarted = (tab) => ({type: SELECTED_TAB, tab})

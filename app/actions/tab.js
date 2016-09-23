'use strict'

import {
	SELECTED_TAB,
	LOGIN,
} from '../constants/ActionTypes';


// actionCreators
export const selectTab = (tab) => (dispatch) => _selectTab(dispatch, tab)
export const login = () => (dispatch) => _login(dispatch)

const _selectTab = (dispatch, tab) => {
	dispatch(_selectStarted(tab));
}

const _login = (dispatch) => {
	dispatch(_loginStarted());
}

const _selectStarted = (tab) => ({type: SELECTED_TAB, tab})
const _loginStarted = () => ({type: LOGIN})

'use strict'

import {
	SELECTED_TAB,
	LOGIN,
} from '../constants/ActionTypes';


// actionCreators
export const selectTab = (tab) => (dispatch) => _selectTab(dispatch, tab)
export const login = (username, password) => (dispatch) => _login(dispatch, username, password)

const _selectTab = (dispatch, tab) => {
	dispatch(_selectStarted(tab));
}

const _login = (dispatch, username, password) => {
	dispatch(_loginStarted(username, password));
}

const _selectStarted = (tab) => ({type: SELECTED_TAB, tab})
const _loginStarted = (username, password) => ({type: LOGIN, username, password})

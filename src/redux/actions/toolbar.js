import { TOOLBAR_CLEAR, TOOLBAR_SET } from '../actionTypes';


export const ClearToolbar = ( ) => ({
	type: TOOLBAR_CLEAR,
	payload: ''
});

export const SetToolbar = ( toolbar ) => ({
	type: TOOLBAR_SET,
	payload: toolbar
});

export default {
	ClearToolbar, SetToolbar
};
import { TOOLBAR_CLEAR, TOOLBAR_SET } from '../actionTypes';
import React from 'react';

const initialState = {
	toolbar: <div></div>
};

export default function(state = initialState, action) {
	switch(action.type) {
		case TOOLBAR_CLEAR:
			return (<div></div>);
		case TOOLBAR_SET:
			return {
				toolbar: action.payload
			};

		default:
			return state;
	}
};
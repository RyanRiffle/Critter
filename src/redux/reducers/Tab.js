import { CREATE_TAB, REMOVE_TAB, SELECT_TAB } from '../actionTypes';
import _ from 'lodash';

const initialState = {
	tabs: [
		{ label: 'Home', href: '/' },
		{ label: 'Recipes', href: '/recipes' },
		{ label: 'Grains', href: '/grains' },
		{ label: 'Hops', href: '/hops' },
		{ label: 'Yeast', href: '/yeast'},
		{ label: 'Misc', href: '/ingredients' },
		{ label: 'Tools', href: '/tools' }
	],
	selectedTab: null
};

export default function(state = initialState, action) {
	switch(action.type) {
		case CREATE_TAB:
			return [ ...state.tabs, action.payload ];
		case REMOVE_TAB:
			for (let i = 0; i < state.tabs.length; i++) {
				if (_.isEqual(state.tabs[i], action.payload)) {
					state.tabs.splice(i, 1);
				}
			}

			return state.tabs
		case SELECT_TAB:
			return state.selectedTab = action.payload;

		default:
			return state;
	}
};
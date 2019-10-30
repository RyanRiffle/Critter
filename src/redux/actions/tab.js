import { CREATE_TAB, REMOVE_TAB, SELECT_TAB } from '../actionTypes';

export const CreateTab = ( label ) => ({
	type: CREATE_TAB,
	payload: {
		label: label
	}
});

export const RemoveTab = ( label ) => ({
	type: REMOVE_TAB,
	payload: {
		label: label
	}
});

export const SelectTab = ( label ) => ({
	type: SELECT_TAB,
	payload: {
		label: label
	}
});

export default {
	CreateTab, RemoveTab
};
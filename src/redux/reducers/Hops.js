import { CREATE_HOP, EDIT_HOP, REMOVE_HOP } from '../actionTypes';

const initialState = {
	hops: window.db.get('hops').value()
};

export default function(state = initialState, action) {
	switch(action.type) {
		case CREATE_HOP:
			return {
				hops: [...state.hops, action.payload]
			}

		case EDIT_HOP:
			return state;

		case REMOVE_HOP:
			for (var i = 0; i < state.hops.length; i++) {
				if (state.hops[i]._id === action.payload) {
					state.hops.splice(i, 1);
				}
			}

			return state;

		default:
			return state;
	}
};
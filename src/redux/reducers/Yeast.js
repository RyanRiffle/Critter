import { CREATE_YEAST, EDIT_YEAST, REMOVE_YEAST } from '../actionTypes';

const initialState = {
	yeast: window.db.get('yeast').value()
};

export default function(state = initialState, action) {
	switch(action.type) {
		case CREATE_YEAST:
			return {
				yeast: [...state.yeast, action.payload]
			}

		case EDIT_YEAST:
			return state;

		case REMOVE_YEAST:
			for (var i = 0; i < state.yeast.length; i++) {
				if (state.yeast[i]._id === action.payload) {
					state.yeast.splice(i, 1);
				}
			}

			return state;

		default:
			return state;
	}
};
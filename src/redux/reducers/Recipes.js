import { CREATE_RECIPE, EDIT_RECIPE, REMOVE_RECIPE } from '../actionTypes';
import '../../db';

const initialState = {
	recipes: window.db.get('recipes').value()
};

export default function(state = initialState, action) {
	switch(action.type) {
		case CREATE_RECIPE:
			return {
				recipes: [...state.recipes, action.payload]
			}

		case EDIT_RECIPE:
			return state;

		case REMOVE_RECIPE:
			for (var i = 0; i < state.recipes.length; i++) {
				if (state.recipes[i]._id === action.payload) {
					state.recipes.splice(i, 1);
				}
			}

			return state;

		default:
			return state;
	}
};
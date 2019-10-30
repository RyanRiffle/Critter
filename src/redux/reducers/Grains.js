import { CREATE_GRAIN, EDIT_GRAIN, REMOVE_GRAIN } from '../actionTypes';
import undoable from 'redux-undo';

const initialState = {
	grains: window.db.get('fermentables').value()
};


function grains(state = initialState, action) {
	switch(action.type) {
		case CREATE_GRAIN:

			window.db.set('fermentables', [action.payload, ...state.grains]).write();

			return {
				grains: [action.payload, ...state.grains]
			}

		case EDIT_GRAIN:
			var changed = false;
			Object.keys(action.payload.data).forEach((key) => {
				if (state.grains[action.payload.index][key] !== action.payload.data[key]) {
					state.grains[action.payload.index][key] = action.payload.data[key];
					changed = true;
				}

			});

			if (!changed)
				return state;

			window.db.set('fermentables', state.grains).write();

			return Object.assign({}, state);

		case REMOVE_GRAIN:
			state.grains = [...state.grains.slice(0, action.payload), ...state.grains.slice(action.payload + 1)];

			window.db.set('fermentables', state.grains).write();

			return Object.assign({}, state);

		default:
			return state;
	}
};

export default undoable(grains, {debug: true});
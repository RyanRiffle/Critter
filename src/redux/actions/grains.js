import { CREATE_GRAIN, EDIT_GRAIN, REMOVE_GRAIN } from '../actionTypes';
import uuid from 'uuid';


export const CreateGrain = (grain) => ({
	type: CREATE_GRAIN,
	payload: {
		...grain,
		_id: uuid()
	}
});

export const EditGrain = ( grainID, edits ) => ({
	type: EDIT_GRAIN,
	payload: {
		index: grainID,
		data: {
			...edits,
		}
	}
});

export const RemoveGrain = ( index ) => ({
	type: REMOVE_GRAIN,
	payload: index
});

export default {
	CreateGrain, EditGrain, RemoveGrain
};
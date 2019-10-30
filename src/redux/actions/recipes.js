import { CREATE_RECIPE, EDIT_RECIPE, REMOVE_RECIPE } from '../actionTypes';
import uuid from 'uuid';

export const CreateRecipe = (recipe) => ({
	type: CREATE_RECIPE,
	payload: {
		...recipe,
		_id: uuid()
	}
});

export const EditRecipe = ( recipe, edits ) => ({
	type: EDIT_RECIPE,
	payload: { 
		recipe: recipe,
		edits: edits
	}
});

export const RemoveRecipe = ( recipe ) => ({
	type: REMOVE_RECIPE,
	payload: recipe
});

export default {
	CreateRecipe, EditRecipe, RemoveRecipe
};
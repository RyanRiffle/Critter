import { combineReducers } from "redux";
import tabState from './Tab';
import toolbarState from './Toolbar';
import recipeState from './Recipes';
import hopState from './Hops';
import yeastState from './Yeast';
import grainState from './Grains';


export default combineReducers({ 
	tabState, 
	toolbarState, 
	recipeState, 
	hopState, 
	yeastState,
	grainState
});
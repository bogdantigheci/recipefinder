import { combineReducers } from 'redux';
import recipes from './recipes';
import favoriteRecipes from './favoriteRecipes';

const reducer = combineReducers({ recipes, favoriteRecipes });

export default reducer;

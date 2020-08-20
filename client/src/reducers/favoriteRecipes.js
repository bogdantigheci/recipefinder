import {
  SET_FAVORITE_RECIPE_SUCCESS,
  SET_FAVORITE_RECIPE_ERROR,
  REMOVE_FAVORITE_RECIPE_SUCCESS,
  REMOVE_FAVORITE_RECIPE_ERROR,
} from '../constants/types';

const favoriteRecipes = (state = [], action) => {
  switch (action.type) {
    case SET_FAVORITE_RECIPE_SUCCESS:
      return [...state, action.recipe];
    case SET_FAVORITE_RECIPE_ERROR:
      return [...state, action.err];
    case REMOVE_FAVORITE_RECIPE_SUCCESS:
      return state.filter((recipe) => recipe !== action.recipe);
    case REMOVE_FAVORITE_RECIPE_ERROR:
      return [...state, action.err];
    default:
      return state;
  }
};

export default favoriteRecipes;

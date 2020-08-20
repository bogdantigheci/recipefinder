import {
  SET_FAVORITE_RECIPE_PENDING,
  SET_FAVORITE_RECIPE_SUCCESS,
  SET_FAVORITE_RECIPE_ERROR,
  REMOVE_FAVORITE_RECIPE_PENDING,
  REMOVE_FAVORITE_RECIPE_SUCCESS,
  REMOVE_FAVORITE_RECIPE_ERROR,
} from '../constants/types';

export const setFavoriteRecipePending = () => ({
  type: SET_FAVORITE_RECIPE_PENDING,
});

export const setFavoriteRecipeSuccess = (recipe) => ({
  type: SET_FAVORITE_RECIPE_SUCCESS,
  recipe,
});

export const setFavoriteRecipeError = (err) => ({
  type: SET_FAVORITE_RECIPE_ERROR,
  err,
});

export const setFavoriteRecipe = (recipe) => (dispatch) => {
  dispatch(setFavoriteRecipePending());
  const err = 'Recipe not found!';
  if (!recipe) {
    return dispatch(setFavoriteRecipeError(err));
  }
  return dispatch(setFavoriteRecipeSuccess(recipe));
};
export const removeFavoriteRecipePending = () => ({
  type: REMOVE_FAVORITE_RECIPE_PENDING,
});

export const removeFavoriteRecipeSuccess = (recipe) => ({
  type: REMOVE_FAVORITE_RECIPE_SUCCESS,
  recipe,
});

export const removeFavoriteRecipeError = (err) => ({
  type: REMOVE_FAVORITE_RECIPE_ERROR,
  err,
});

export const removeFavoriteRecipe = (recipe) => (dispatch) => {
  dispatch(removeFavoriteRecipePending());
  const err = 'Recipe not found!';
  if (!recipe) {
    return dispatch(removeFavoriteRecipeError(err));
  }
  return dispatch(removeFavoriteRecipeSuccess(recipe));
};

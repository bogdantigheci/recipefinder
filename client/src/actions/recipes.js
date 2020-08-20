import {
  SET_RECIPES_PENDING,
  SET_RECIPES_ERROR,
  SET_RECIPES_SUCCESS,
} from '../constants/types';
import axios from 'axios';

export const getRecipesPending = () => ({ type: SET_RECIPES_PENDING });
export const getRecipesSuccess = (recipes) => ({
  type: SET_RECIPES_SUCCESS,
  recipes,
});
export const getRecipesError = (err) => ({ type: SET_RECIPES_ERROR, err });

export const getRecipes = (ingredients, dish) => (dispatch) => {
  dispatch(getRecipesPending());
  return axios
    .post('/api/recipes', { ingredients, dish })
    .then((res) => {
      dispatch(getRecipesSuccess(res.data));
    })
    .catch((err) => dispatch(getRecipesError(err)));
};

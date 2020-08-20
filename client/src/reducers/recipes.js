import { SET_RECIPES_SUCCESS, SET_RECIPES_ERROR } from '../constants/types';

const recipes = (state = [], action) => {
  switch (action.type) {
    case SET_RECIPES_SUCCESS:
      return [...state, ...action.recipes.results];
    case SET_RECIPES_ERROR:
      return [...state, action.err];
    default:
      return state;
  }
};

export default recipes;

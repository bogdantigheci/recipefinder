import _ from 'lodash';

export const getFavoriteRecipes = (state) =>
  _.get(state, 'favoriteRecipes', []);

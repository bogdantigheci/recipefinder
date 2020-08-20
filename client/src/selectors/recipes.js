import _ from 'lodash';

export const getRecipes = (state) => _.get(state, 'recipes', []);

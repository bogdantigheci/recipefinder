import React from 'react';
import { connect } from 'react-redux';
import Recipe from './Recipe';
import { getRecipes } from '../../selectors/recipes';

const RecipesList = (props) => {
  return props.recipes.map((recipe, i) => (
    <Recipe key={i} recipe={recipe} showStar={true} />
  ));
};

const mapStateToProps = (state) => ({ recipes: getRecipes(state) });

export default connect(mapStateToProps)(RecipesList);

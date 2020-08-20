import React from 'react';
import { connect } from 'react-redux';
import Recipe from './Recipe';
import { getFavoriteRecipes } from '../../selectors/favoriteRecipes';

const FavoriteRecipesList = (props) => {
  return (
    <div>
      <h4>Your Favorite Recipes</h4>
      {props.favoriteRecipes.map((recipe, i) => (
        <Recipe key={i} recipe={recipe} showStar={false} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  favoriteRecipes: getFavoriteRecipes(state),
});

export default connect(mapStateToProps)(FavoriteRecipesList);

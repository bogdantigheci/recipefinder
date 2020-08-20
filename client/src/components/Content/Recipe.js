import React, { useState } from 'react';
import {
  setFavoriteRecipe,
  removeFavoriteRecipe,
} from '../../actions/favoriteRecipes';
import { connect } from 'react-redux';

const Recipe = (props) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const setAsFavoriteRecipe = (recipe) => {
    props.setFavoriteRecipe(recipe);
    setIsFavorite(true);
  };

  return (
    <div className="recipe-item">
      {props.showStar ? (
        isFavorite ? (
          <div className="star">&#9733;</div>
        ) : (
          <div
            className="star"
            onClick={() => setAsFavoriteRecipe(props.recipe)}
          >
            &#9734;
          </div>
        )
      ) : (
        <div></div>
      )}

      <div className="recipe-text">
        <a href={props.recipe.href}>
          <h4>{props.recipe.title}</h4>
        </a>
        <p>{props.recipe.ingredients}</p>
      </div>
      <img
        src={
          props.recipe.thumbnail
            ? props.recipe.thumbnail
            : '/images/image_not_available.png'
        }
        alt={props.recipe.title}
        className="recipe-img"
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setFavoriteRecipe: (recipe) => dispatch(setFavoriteRecipe(recipe)),
});

export default connect(null, mapDispatchToProps)(Recipe);

import React from 'react';

const Recipe = (props) => {
  return (
    <div className="recipe-item">
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



export default Recipe;

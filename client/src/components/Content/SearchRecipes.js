import React, { useState } from 'react';
import {
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Button,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { getRecipes } from '../../actions/recipes';
import RecipesList from './RecipesList';

const SearchRecipes = (props) => {
  const [ingredients, setIngredients] = useState('');
  const [dish, setDish] = useState('');

  const searchRecipe = () => {
    props.getRecipes(ingredients, dish);
  };

  return (
    <React.Fragment>
      <div className="search-description">
        <p>
          Don't know what you can cook with the ingredients you have in your
          house at some point?
        </p>
        <p>
          <span className="emphasize">We can make it easy for you.</span> Just
          search the ingredients split by comma, you can also choose a dish you
          prefer to prepare with them.
        </p>
      </div>
      <Form className="container input-fields">
        <FormGroup>
          <FormLabel className="title-secondary">Ingredients</FormLabel>{' '}
          <FormControl
            type="text"
            placeholder="Enter ingredients split by comma..."
            onChange={(e) => setIngredients(e.target.value)}
          />
        </FormGroup>{' '}
        <FormGroup>
          <FormLabel className="title-secondary">Dish</FormLabel>{' '}
          <FormControl
            type="text"
            placeholder="The dish you want..."
            onChange={(e) => setDish(e.target.value)}
          />{' '}
        </FormGroup>
        <Button className="btn btn-primary" onClick={searchRecipe}>
          Search
        </Button>
      </Form>
      <RecipesList />
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getRecipes: (ingredients, dish) => dispatch(getRecipes(ingredients, dish)),
});

export default connect(null, mapDispatchToProps)(SearchRecipes);

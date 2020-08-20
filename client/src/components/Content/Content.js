import React from 'react';
import SearchRecipes from './SearchRecipes';
import FavoriteRecipesList from './FavoriteRecipesList';
import { Switch, Route } from 'react-router-dom';

const Content = () => (
  <div className="container text-center">
    <Switch>
      <Route exact path="/" component={SearchRecipes} />
      <Route exact path="/favorites" component={FavoriteRecipesList} />
    </Switch>
  </div>
);

export default Content;

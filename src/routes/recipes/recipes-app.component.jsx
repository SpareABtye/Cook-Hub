import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import RecipeNav from '../../components/recipe/recipe-nav/recipe-nav.component';
import RecipeCard from '../../components/recipe/recipe-card/recipe-card.component';
import RecipesHomepage from './recipe-home/recipes-homepage.component';

import RECIPE_DATA from './../../assets/recipe-data.json';

import './recipes-app.styles.scss'

const RecipesApp = () => {

    const [recipeData] = useState(RECIPE_DATA)

    return (
        <Routes>
            <Route path='/*' element={ <RecipeNav /> }>
                <Route index element={<RecipesHomepage />}/>
                {recipeData.map(({recipe}) => {
                    return (
                        <Route key='{recipe.route}' path='{recipe.path}' element={<RecipeCard product='{recipe.product}' ingredients='{recipe.ingredients}' directions='{recipe.directions}' />} />
                )})}
            </Route>
        </Routes>
    )
};

export default RecipesApp;
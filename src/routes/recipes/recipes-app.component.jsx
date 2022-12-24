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
        <div className='recipe-container'>
        <Routes>
            <Route path='/*' element={ <RecipeNav /> }>
                <Route index element={<RecipesHomepage />}/>
                {recipeData.map(({id, routePath, product, ingredients, directions}) => {
                    return (
                        <Route key={id} path={routePath} element={<RecipeCard product={product} ingredients={ingredients} directions={directions} />} />
                )})}
            </Route>
        </Routes>
        </div>
    )
};

export default RecipesApp;
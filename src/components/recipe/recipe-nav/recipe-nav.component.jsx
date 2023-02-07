import { useState } from 'react'
import { Outlet, Link } from 'react-router-dom';

import RECIPE_DATA from '../../../assets/recipe-data.json'

import './recipe-nav.styles.scss'

const RecipeNav = () => {

    const [recipeData] = useState(RECIPE_DATA)

        return(
        <>
        <div className='recipe-navigation'>
            <ul>
                <li className='nav-recipe-link'>
                    <Link to='/Cook-Hub/recipes'>
                    Recipe Hompage
                    </Link>
                </li>
            {recipeData.map((recipe) => {
                return (
                    <li className='nav-recipe-link'>
                    <Link key={recipe.id} to={recipe.linkPath}>
                        {recipe.product}
                    </Link>
                    </li>
                )
            })}
            </ul>
        </div>
        <Outlet />
        </>
        )}

export default RecipeNav
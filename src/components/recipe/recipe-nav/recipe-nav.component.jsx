import { useState } from 'react'
import { Outlet, Link } from 'react-router-dom';

import RECIPE_DATA from '../../../assets/recipe-data.json'

import './recipe-nav.styles.scss'

const RecipeNav = () => {

    const [recipeData] = useState(RECIPE_DATA)

    return (
        <>
            <div className='recipe-navigation'>
                <Link className='nav-link' to='/Cook-Hub/recipes'>
                    Recipe Hompage
                </Link>
                <ul>
                {recipeData.map((recipe) => {
                    return (
                        <li className='nav-link'>
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
    )
}

export default RecipeNav
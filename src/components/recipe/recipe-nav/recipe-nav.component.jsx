import { useState } from 'react'
import { Outlet, Link } from 'react-router-dom';

import RECIPE_DATA from '../../../assets/recipe-data.json'

import './recipe-nav.styles.scss'

const RecipeNav = () => {

    const [recipeData] = useState(RECIPE_DATA)

    return (
        <>
            <div>
                <Link className='nav-link' to='/Cook-Hub/recipes'>
                    Recipe Hompage
                </Link>
                {recipeData.map((recipe) => {
                    return (
                        <Link key={recipe.id} to={recipe.path}>
                            {recipe.product}
                        </Link>
                    )
                })}
            </div>
            <Outlet />
        </>
    )
}

export default RecipeNav
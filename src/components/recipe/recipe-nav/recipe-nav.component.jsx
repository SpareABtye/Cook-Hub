import { useState } from 'react'
import { Outlet, Link } from 'react-router-dom';

import RECIPE_DATA from '../../../assets/recipe-data.json'

import './recipe-nav.styles.scss'

const RecipeNav = () => {

    const [recipeData] = useState(RECIPE_DATA)

    let width = window.innerWidth

    if (width > 800){
        return(
        <>
        <div className='recipe-navigation'>
            <div>
                <Link className='nav-recipe-link' to='/Cook-Hub/recipes'>
                    Recipe Hompage
                </Link>
            </div>
            <nav>
                <h4>Recipes</h4>
                <ul>
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
            </nav>
        </div>
        <Outlet />
        </>
        )} 
        else {
            return (
                <>
                <div className='recipe-navigation2'>
                    <div>
                        <Link className='nav-recipe-link2' to='/Cook-Hub/recipes'>
                            Recipe Hompage
                        </Link>
                    </div>
                    <nav>
                        <h4>Recipes</h4>
                        <ul>
                        {recipeData.map((recipe) => {
                            return (
                                <li className='nav-recipe-link2'>
                                <Link key={recipe.id} to={recipe.linkPath}>
                                    {recipe.product}
                                </Link>
                                </li>
                            )
                        })}
                        </ul>
                    </nav>
                </div>
                <Outlet />
                </>
            )
        }
    
}

export default RecipeNav
import { Outlet, Link, useState } from 'react';


import INGREDIENT_LIST from '../../assets/recipe-data.json'

import './recipes-homepage.styles.scss'

const RecipesHomepage = () => {

    const [ingredientList, setIngredientList] = useState(INGREDIENT_LIST)

    return (
        <>
            <h1>Recipes Pagesss</h1>
        </>
    )
};

export default RecipesHomepage;
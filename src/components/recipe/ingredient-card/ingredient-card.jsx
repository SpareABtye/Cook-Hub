import { useState } from 'react';

import INGREDIENT_LIST from '../../assets/recipe-data.json'

import './ingredient-card.styles.scss'

const IngredientCard = ({ingredients}) => {
  const [ingredientList, setIngredientList] = useState(INGREDIENT_LIST)

  return (
      <div className='ingredients'>
      {ingredientList.map((ingredientListing) => {
        return (
          <div key={ingredientListing.id}>
              <h1>{ingredientListing.product}</h1>
              {Object.values(ingredientListing.ingredients).map((ingredientItem, i) => {
                return (
                  <>
                  <div key={i}>
                    {ingredientItem}
                  </div>
                  </>
                )
              })}
          </div>
        )  
      })}
  </div>
  )
};

export default IngredientCard;
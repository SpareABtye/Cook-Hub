import './ingredient-card.styles.scss'

const RecipeCard = ({product, ingredients, directions}) => {

  return (
      <div className='ingredient-card'>
        <div className='product-title'>
          {product}
        </div>
        <div className='ingredients'>
              {Object.keys(ingredients).map((ingredient, i) => {
                return (
                  <div key={i}>
                  {ingredient}: {ingredients[ingredient]}
                  </div>
                )
              })}
        </div>
        <div className='directions'>
          {directions}
        </div>
      </div>
  )
};

export default RecipeCard;
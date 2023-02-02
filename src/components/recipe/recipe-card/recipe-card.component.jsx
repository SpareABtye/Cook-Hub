import './ingredient-card.styles.scss'

const RecipeCard = ({product, ingredients, directions}) => {

  return (
      <div className='ingredient-card'>
        <div className='card'>
          <h2>
            {product}
          </h2>
          <div className='ingredients'>
                {Object.keys(ingredients).map((ingredient, i) => {
                  return (
                    <div key={i}>
                    {ingredient}: {ingredients[ingredient]}
                    </div>
                  )
                })}
          </div>
          </div>
        <div className='directions'>
          {Object.keys(directions).map((direction, i) => {
            return (
              <div className='direction-line' key={i}>
                {direction} {directions[direction]}
              </div>
            )
          }
          )}
        </div>
      </div>
  )
};

export default RecipeCard;
/*
RecipeCardInfo
Shown when a user clicks into a recipe from the Home page.
Shows the recipe's information.

Utilizes /components/IngredientInRecipe
*/

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import IngredientInRecipe from './IngredientInRecipe'

class RecipeCardInfo extends PureComponent {

  handleRenderIngredients = () => {
    return this.props.data.recipe_ingredients.map( ing => {
      let ingredient
      ingredient = this.props.ingredients.all.find( ing2 => {
        return ing2.id === ing.ingredient_id
      })
      return <IngredientInRecipe data={ingredient} measurement={ing} />
    })
  } // end of handleRenderIngredients()

  render() {
    return (
      <div>
        <h2>{this.props.data.name}</h2>
        <img src={this.props.data.image} />
        <p>{this.props.data.description}</p>
        <p>{this.props.data.directions}</p>
        <h5>Ingredients</h5>
        <ul>{this.handleRenderIngredients()}</ul>
      </div>
    )
  } // end of render()
} // end of RecipeCardInfo

const mapStateToProps = (state) => {
  return state
} // end of mapStateToProps

export default connect(mapStateToProps)(RecipeCardInfo);

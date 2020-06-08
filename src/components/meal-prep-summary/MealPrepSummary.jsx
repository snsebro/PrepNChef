import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import defaultInfo from '../../nutrients.json'

import './mealPrepSummary.css'

class MealPrepSummary extends Component {
  constructor() {
    super()
    this.state = {
      fullMealInfo: null,
      showMealInfo: null
    }
  }

  componentDidMount = async () => {
    this.props.setRecipe(this.props.meals)

    const results = await axios(`https://api.spoonacular.com/recipes/informationBulk?apiKey=897a667132264dbbb46d81ce62011dff&ids=${this.props.mealIds}&includeNutrition=true`)

    this.setState({
      fullMealInfo: results.data
    })

  }

  showMeal = (meal) => {
    this.setState({
      showMealInfo: this.state.fullMealInfo.find(el => el.id === meal.id)
    })
  }

  render() {
    let servings
    let ingredients = defaultInfo[0].extendedIngredients
    let calories = defaultInfo[0].nutrition.nutrients
    let totalFat = defaultInfo[0].nutrition.nutrients
    let saturatedFat = defaultInfo[0].nutrition.nutrients
    let cholesterol = defaultInfo[0].nutrition.nutrients
    let sodium = defaultInfo[0].nutrition.nutrients
    let totalCarbs = defaultInfo[0].nutrition.nutrients
    let netCarbs = defaultInfo[0].nutrition.nutrients
    let fiber = defaultInfo[0].nutrition.nutrients
    let sugar = defaultInfo[0].nutrition.nutrients
    let protein = defaultInfo[0].nutrition.nutrients

    if (this.state.showMealInfo) {
      let nutrients = this.state.showMealInfo.nutrition.nutrients
      ingredients = this.state.showMealInfo.extendedIngredients
      servings = this.state.showMealInfo.servings
      calories = nutrients[0]
      totalFat = nutrients[1]
      saturatedFat = nutrients[2]
      totalCarbs = nutrients[3]
      netCarbs = nutrients[4]
      sugar = nutrients[5]
      cholesterol = nutrients[6]
      sodium = nutrients[7]
      protein = nutrients[8]
      fiber = nutrients[15]
    }

    return (

      this.props.meals && this.props.mealIds ?

        <div className='summary-div'>
          <div>
            <h2>Meal Plan</h2>
            {this.props.meals.map(meal =>
              <>
                <Link to={'/Recipes/' + meal.title} key={meal.id}>
                  <p>{meal.title}</p>
                </Link>
                <button onClick={() => (this.showMeal(meal))}>Meal Details</button></>)}
          </div>
          <div>
            <h2>Macro Summary</h2>
            <p>{servings} Servings</p>
            <p>Amount per serving/ % Daily Value</p>
            <p>Calories {calories.amount}g / {calories.percentOfDailyNeeds}%</p>
            <p>Total Fat {totalFat.amount}g / {totalFat.percentOfDailyNeeds}%</p>
            <p>Saturated Fat {saturatedFat.amount}g / {saturatedFat.percentOfDailyNeeds}%</p>
            <p>Cholesterol {cholesterol.amount}mg / {cholesterol.percentOfDailyNeeds}%</p>
            <p>Sodium {sodium.amount}mg / {sodium.percentOfDailyNeeds}%</p>
            <p>Total Carb. {totalCarbs.amount}g / {totalCarbs.percentOfDailyNeeds}%</p>
            <p>Net Carb. {netCarbs.amount}g / {netCarbs.percentOfDailyNeeds}%</p>
            <p>Dietary Fiber {fiber.amount}g / {fiber.percentOfDailyNeeds}%</p>
            <p>Sugar {sugar.amount}g / {sugar.percentOfDailyNeeds}%</p>
            <p>Protein {protein.amount}g / {protein.percentOfDailyNeeds}%</p>
          </div>
          <div>
            <h2>Shopping List</h2>
            {ingredients.map(ingredient => <p>{ingredient.name}</p>)}
          </div>
        </div>

        : null
    )
  }
}

export default withRouter(MealPrepSummary)

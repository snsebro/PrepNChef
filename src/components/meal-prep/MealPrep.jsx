import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './mealprep.css'

export default class MealPrep extends Component {
  constructor() {
    super()
    this.state = {
      confirmDays: false,
      getMeals: false,
      message: 'How many days are we planning for?',
      meals: null,
      mealIds: ''
    }
  }

  getMealIds = () => {
    this.props.meals.map(meal => this.setState(prevState => ({
      mealIds: prevState.mealIDs + meal.id + ','
    })))

  }

  updateMessage = () => {
    this.setState({
      message: 'Any diet restrictions?',
      confirmDays: true
    })

  }

  render() {
    let selectInput
    let daySelect =
      <select className='day-select' name='days' size='1' onChange={this.props.updateMealDays} >
        <option value='0'>0</option>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
        <option value='6'>6</option>
        <option value='7'>7</option>
      </select>

    let dietSelect =
      <div className='diet-select'>

        <input onChange={this.props.updateDietRestrictions} type="checkbox" name="Gluten Free" value="glutenFree" />
        <label htmlFor="Gluten Free"> Gluten Free</label><br />
        <input onChange={this.props.updateDietRestrictions} type="checkbox" name="Ketogenic" value="ketogenic" />
        <label htmlFor="Ketogenic">Ketogenic</label><br />
        <input onChange={this.props.updateDietRestrictions} type="checkbox" name="Vegetarian" value="vegetarian" />
        <label htmlFor="Vegetarian"> Vegetarian</label><br />
        <input onChange={this.props.updateDietRestrictions} type="checkbox" name="Lacto-Vegetarian" value="lactoVegetarian" />
        <label htmlFor="Lacto-Vegetarian">Lacto-Vegetarian</label><br />
        <input onChange={this.props.updateDietRestrictions} type="checkbox" name="Ovo-Vegetarian" value="ovoVegetarian" />
        <label htmlFor="Ovo-Vegetarian">Ovo-Vegetarian</label><br />
        <input onChange={this.props.updateDietRestrictions} type="checkbox" name="Vegan" value="vegan" />
        <label htmlFor="Vegan">Vegan</label>
        <input onChange={this.props.updateDietRestrictions} type="checkbox" name="Pescetarian" value="pescetarian" />
        <label htmlFor="Pescetarian">Pescetarian</label><br />
        <input onChange={this.props.updateDietRestrictions} type="checkbox" name="Paleo" value="paleo" />
        <label htmlFor="Paleo">Paleo</label><br />
        <input onChange={this.props.updateDietRestrictions} type="checkbox" name="Primal" value="primal" />
        <label htmlFor="Primal">Primal</label><br />
        <input onChange={this.props.updateDietRestrictions} type="checkbox" name="Whole30" value="whole30" />
        <label htmlFor="Whole30">Whole30</label><br />
      </div>

    let button
    let button2

    let mealPlanButton = <button onClick={this.props.getMealIds}>Meal Plan Suammry</button>

    let generateMealsButton = <button onClick={this.props.getMeals}>Generate Meal Plan</button>

    this.props.generateMealsButton ? button2 = generateMealsButton : button2 = null

    this.props.mealDays && this.props.meals ? button = mealPlanButton : button = null

    this.props.mealDays ? selectInput = dietSelect : selectInput = daySelect

    return (
      <div className='select-div'>
        <h3>{this.props.message}</h3>
        <>
          {selectInput}
        </>
        <Link to='/MealPrep/Summary'>{button}</Link>
        {button2}
      </div>
    )
  }
}

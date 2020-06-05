import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import axios from 'axios'

import './mealprep.css'

export default class MealPrep extends Component {
  constructor() {
    super()
    this.state = {
      confirmDays: false,
      message: 'How many days are we planning for?',
      meals: null
    }
  }

  updateMessage = () => {
    this.setState({
      message: 'Any diet restrictions?',
      confirmDays: true
    })
  }  

  // getMeals = async () => {
  //   let url = `https://api.spoonacular.com/recipes/random?apiKey=897a667132264dbbb46d81ce62011dff&number=${this.props.mealDays}&tags=${this.props.dietRestrictions}`

  //   const results = await axios(`https://api.spoonacular.com/recipes/random?apiKey=897a667132264dbbb46d81ce62011dff&number=${this.props.mealDays}&tags=${this.props.dietRestrictions}`)

  //   this.setState({
  //     meals: results.data.recipes
  //   })
  // }

  render() {
    let select = <select className='day-select' name='days' size='1' onChange={this.props.updateMealDays}>
    <option value='1'>1</option>
    <option value='2'>2</option>
    <option value='3'>3</option>
    <option value='4'>4</option>
    <option value='5'>5</option>
    <option value='6'>6</option>
    <option value='7'>7</option>
    </select>

    // let dietSelect = <select className='diet-select'name='days' size='1' multiple onChange={this.updateDietRestrictions}>
    // <option value='Keto'>Keto</option>
    // <option value='Low Carb'>Low Carb</option>
    // <option value='Nut Allergy'>Nut Allergy</option>
    // <option value='Glutten Allergy'>Glutten Allergy</option>
    // </select>

    let dietSelect =
      <div className='diet-select'>
      
        <input onChange={this.props.updateDietRestrictions} type="checkbox" name="Gluten Free" value="glutenFree"/>
            <label htmlFor="Gluten Free"> Gluten Free</label><br/>
          <input onChange={this.props.updateDietRestrictions}type="checkbox" name="Ketogenic" value="ketogenic"/>
            <label htmlFor="Ketogenic">Ketogenic</label><br/>
          <input onChange={this.props.updateDietRestrictions}type="checkbox" name="Vegetarian" value="vegetarian"/>
            <label htmlFor="Vegetarian"> Vegetarian</label><br />
          <input onChange={this.props.updateDietRestrictions}type="checkbox" name="Lacto-Vegetarian" value="lactoVegetarian"  />
            <label htmlFor="Lacto-Vegetarian">Lacto-Vegetarian</label><br/>
          <input onChange={this.props.updateDietRestrictions}type="checkbox" name="Ovo-Vegetarian" value="ovoVegetarian" />
            <label htmlFor="Ovo-Vegetarian">Ovo-Vegetarian</label><br/>
          <input onChange={this.props.updateDietRestrictions}type="checkbox" name="Vegan" value="vegan" />
            <label htmlFor="Vegan">Vegan</label>
          <input onChange={this.props.updateDietRestrictions}type="checkbox" name="Pescetarian" value="pescetarian" />
            <label htmlFor="Pescetarian">Pescetarian</label><br />  
          <input onChange={this.props.updateDietRestrictions}type="checkbox" name="Paleo" value="paleo" />
            <label htmlFor="Paleo">Paleo</label><br />
          <input onChange={this.props.updateDietRestrictions}type="checkbox" name="Primal" value="primal" />
            <label htmlFor="Primal">Primal</label><br />
          <input onChange={this.props.updateDietRestrictions}type="checkbox" name="Whole30" value="whole30" />
            <label htmlFor="Whole30">Whole30</label><br />
      </div>
  
    let button
    let summaryButton = <button onClick={this.updateMessage}>Meal Plan</button>
    
    this.state.confirmDays ? button = summaryButton : button = null

    this.state.confirmDays ? select = dietSelect : select = select
    
    return (
      <div className='select-div'>
        <h3>{this.state.message}</h3>
          <>
            {select}
        </>
        <button onClick={this.updateMessage}>Confirm</button>
        <Link to='/MealPrep/Summary'>{button}</Link>
        <button onClick={this.props.getMeals}>URL</button>
        <button onClick={() => this.props.setRecipe(this.props.meals)}>SET RECIPE</button>
      </div>
    )
  }
}

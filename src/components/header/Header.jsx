import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import recipes from '../../recipes.json'

import './header.css'

export default class Header extends Component {
  
  render() {
    let MealSummaryLink
    this.props.meals && this.props.mealIds ? MealSummaryLink = <Link to='/MealPrep/Summary'><li className='nav-links'>Meal Summary</li></Link> : MealSummaryLink = ''

    return (
        < header >
        <ul>
          <li className='logo'>PrepChef</li>
          {MealSummaryLink}
          <Link to='/MealPrep'><li className='nav-links' onClick={this.props.resetMealDays}>Meal Prep</li></Link>
          <Link to='/Recipes'><li className='nav-links' onClick={() => this.props.setRecipe(recipes)}>Recipes</li></Link>
          <Link to='/'><li className='nav-links' onClick={this.props.resetMealDays}>Home</li></Link>
        </ul>
    </header >
    )
  }
}


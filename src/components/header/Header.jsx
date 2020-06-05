import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import recipes from '../../recipes.json'

import './header.css'

export default function Header(props) {
  return (
    <header>
      <ul>
        <li className='logo'>PrepChef</li>
        <Link to='/Contact'><li className='nav-links'>Contact</li></Link>
        <Link to='/MealPrep'><li className='nav-links' onClick={props.resetMealDays}>Meal Prep</li></Link>
        <Link to='/Recipes'><li className='nav-links' onClick={()=>props.setRecipe(recipes)}>Recipes</li></Link>
        <Link to='/'><li className='nav-links' onClick={props.resetMealDays}>Home</li></Link>
      </ul>
    </header>
  )
}

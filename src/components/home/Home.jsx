import React from 'react'
import {Link} from 'react-router-dom'
import './home.css'

export default function Home(props) {
  return (
    <div className='home-div'>
      <h1>PrepChef</h1>
      {/* <h4>Meal prep made easy</h4> */}
      <p>Welcome to PrepChef your personal meal prepping assistant. We know meal prepping can be hard and we're here to help you get started. With access to over 10,000 recipes and diet concious meal options, we make meal prep simple and easy to navigate. Click below to start your custom meal plan below</p>
      <Link to='/MealPrep'><button>Start Meal Plan</button></Link>
    </div>
  )
}

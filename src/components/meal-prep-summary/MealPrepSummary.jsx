import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

import './mealPrepSummary.css'

 class MealPrepSummary extends Component {

  render() {
    return (
      this.props.meals ?
      <div className='summary-div'>
        <div>
          <h2>Meal Plan</h2>
            {this.props.meals.map(meal => <Link to={'/Recipes/' + meal.title}><p>{meal.title}</p></Link>)}
        </div>
        <div>
          <h2>Macro Summary</h2>
        </div>
        <div>
          <h2>Shopping List</h2>
        </div>
      </div>
      : null
    )
  }
 }

 export default withRouter (MealPrepSummary)

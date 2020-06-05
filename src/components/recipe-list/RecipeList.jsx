import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'

import './recipeList.css'
import RecipeListCard from '../recipe-list-card/RecipeListCard'

class RecipeList extends
  Component {
  constructor() {
    super()
      this.state = {
     
      }
  
  }


  render() {
    return (
      <div className='total-div'>
        <input type='text' name='search' placeholder='Search Recipes'></input>
        <div className='recipe-list'>
          {this.props.recipes.map(recipe => 
            <RecipeListCard recipes={this.state.recipes} key={recipe.id} image={recipe.image} name={recipe.title} recipeDetail={this.props.recipe}/>
          )}
        </div>
      </div>
     
    )
  }
}

export default withRouter (RecipeList)

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

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
      this.props.recipes ?
        <div className='total-div'>
          <input type='text' name='search' placeholder='Search Recipes' onChange={this.props.updateSearch}></input>
          <button onClick={this.props.recipeSearch} className='search-button'>Search</button>
          <div className='recipe-list'>
            {this.props.recipes.map(recipe =>
              <RecipeListCard recipes={this.state.recipes} key={recipe.id} image={recipe.image} name={recipe.title} recipeDetail={this.props.recipe} />
            )}
          </div>
        </div>
        : null

    )
  }
}

export default withRouter(RecipeList)

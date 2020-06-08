
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class RecipeListCard extends Component {
  render() {
    return (
      <Link to={'/Recipes/' + this.props.name}>
        <div className='recipe-image-div'>
          <img alt={this.props.title} src={this.props.image}></img><p>{this.props.name}</p>
        </div>
      </Link>
    )
  }
}


import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import './recipeDetail.css'

class RecipeDetail extends Component {
  constructor() {
    super()
    this.state = {
      ingridientsState: '',
      showIngridients: false
    }
  }

  componentDidMount() {
    this.props.setRecipe(this.props.match.params.name)
  }


  showIngridients = () => {
    this.setState(prevState => ({
      showIngridients: !prevState.showIngridients
    }))
    this.setState({recipeText: this.state.ingridientsState})
  }

  searchRecipes = async () => {

  }




  render() {
    let directions 
    let ingridients = ''

    if (this.props.recipeDetail) {
      directions = this.props.recipeDetail.instructions
      this.props.recipeDetail.extendedIngredients.map(ingirdient =>
        ingridients += '<p>' + (ingirdient.original) + '</p>'
      )
      console.log(ingridients)
      console.log(directions)
    }

    return (
      this.props.recipeDetail ?
        <div className='recipe-detail'>
          <div className='recipe-left'>
            <div className='transparent-box'>
              <div className='recipe-image'><img alt={this.props.recipeDetail.title} src={this.props.recipeDetail.image}></img></div>
              <span>
                <button className='info-button' onClick={this.showIngridients}>Details</button>
              </span>
            </div>
          </div>
          <div className='recipe-right'>
            <div className='recipe-summary'>
              <h1>{this.props.recipeDetail.title}</h1>
              <button className='diet-button'>Time: {this.props.recipeDetail.readyInMinutes} mins.</button>
              <button className='diet-button'>Servings: {this.props.recipeDetail.servings}</button>
              <div className ='recipe-text' dangerouslySetInnerHTML={this.state.showIngridients === false ? { __html: directions } : { __html: ingridients } }/>
            </div>

          </div>
        </div>
        : null
    )
  }
}

export default withRouter(RecipeDetail)

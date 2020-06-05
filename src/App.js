import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import axios from 'axios'
import recipes from '../src/recipes.json'

import Header from '../src/components/header/Header'
import Home from '../src/components/home/Home'
import MealPrep from './components/meal-prep/MealPrep';
import RecipeList from '../src/components/recipe-list/RecipeList'
import RecipeDetail from './components/recipe-detail/RecipeDetail';
import MealPrepSummary from './components/meal-prep-summary/MealPrepSummary';
import Footer from '../src/components/footer/Footer'

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      recipes: recipes,
      recipeDetail: null,
      mealDays: 0,
      dietRestrictions: '',
      meals: null  
    }
  }

  componentDidMount = async () =>{ 
    // const results = await Axios('https://api.spoonacular.com/recipes/random?apiKey=897a667132264dbbb46d81ce62011dff&number=8')  
    
    // this.setState({
    //   recipes: results.data.recipes
    // })
    
  }

  setRecipeDetail = (name) => {
    this.setState(prevState => ({
      recipeDetail: prevState.recipes.filter(recipe => recipe.title === name)[0]
    }))
  }

  setRecipe = (recipes) => {
    this.setState({
      recipes: recipes
    })
  }

  updateMealDays = (e) => {
    this.setState({
      mealDays: e.target.value
    })
  }

  updateDietRestrictions = (e) => {
    e.persist()
    this.setState(prevState => ({
      dietRestrictions: prevState.dietRestrictions + e.target.value + ','
    }))
  }

  getMeals = async () => {
    let url = `https://api.spoonacular.com/recipes/random?apiKey=897a667132264dbbb46d81ce62011dff&number=${this.state.mealDays}&tags=${this.state.dietRestrictions}`

    const results = await axios(`https://api.spoonacular.com/recipes/random?apiKey=897a667132264dbbb46d81ce62011dff&number=${this.state.mealDays}&tags=${this.state.dietRestrictions}`)

    this.setState({
      meals: results.data.recipes
    })
  }
  
  render() {
    return (
      <div className='window-div'>
        <Header setRecipe={this.setRecipe}/>
        <main>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/MealPrep' exact>
            <MealPrep updateMealDays={this.updateMealDays} updateDietRestrictions={this.updateDietRestrictions} mealDays={this.state.mealDays} dietRestrictions={this.state.dietRestrictions} getMeals={this.getMeals} setRecipe={this.setRecipe} recipes={this.state.recipes} meals={this.state.meals}/>
          </Route>
          <Route path='/MealPrep/Summary'>
            <MealPrepSummary meals={this.state.meals} recipes={this.state.recipes}/>
          </Route>
          <Route path='/Recipes' exact>
            <RecipeList recipes={this.state.recipes}/>
          </Route>
          <Route path='/Recipes/:name'>
            <RecipeDetail recipeDetail={this.state.recipeDetail} recipes={this.state.recipes} setRecipe={this.setRecipeDetail} meals={this.state.meals}/>
          </Route>
        </main>
        <Footer />
      </div>
      )
  }
}

export default App;

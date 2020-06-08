import React, { Component } from 'react';
import { Route } from 'react-router-dom'
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
      meals: null,
      message: 'How many days are we planning for?',
      generateMealsButton: true,
      mealIds: '',
      search: '',
    }
  }

  recipeSearch = async () => {
    const results = await axios(`https://api.spoonacular.com/recipes/random?apiKey=897a667132264dbbb46d81ce62011dff&number=8&tags=${this.state.search}`)

    this.setState({ recipes: results.data.recipes })
  }

  updateSearch = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  setRecipeDetail = (name) => {
    this.setState(prevState => ({
      recipeDetail: prevState.recipes.filter(recipe => recipe.title === name)[0]
    }))
  }

  setRecipe = (recipe) => {
    this.setState({
      recipes: recipe
    })
  }

  updateMealDays = (e) => {
    this.setState({
      mealDays: e.target.value,
      message: 'Any diet restrictions',
      meals: null,
      generateMealsButton: true
    })
  }

  resetMealDays = () => {
    this.setState({
      mealDays: 0,
      message: 'How many days are we planning for?',
      generateMealsButton: true,
      dietRestrictions: ''
    })
  }

  updateDietRestrictions = (e) => {
    e.persist()
    this.setState(prevState => ({
      dietRestrictions: prevState.dietRestrictions + e.target.value + ','
    }))
  }

  getMeals = async () => {
    const results = await axios(`https://api.spoonacular.com/recipes/random?apiKey=897a667132264dbbb46d81ce62011dff&number=${this.state.mealDays}&tags=${this.state.dietRestrictions}`)

    this.setState({
      generateMealsButton: false,
      meals: results.data.recipes
    }, () => {
      this.setRecipe(this.state.meals)
    })
  }

  getMealIds = () => {
    this.state.meals.map(meal => this.setState(prevState => ({
      mealIds: prevState.mealIds + meal.id + ','
    })))
  }

  render() {
    return (
      <div className='window-div'>
        <Header setRecipe={this.setRecipe} resetMealDays={this.resetMealDays} meals={this.state.meals} mealIds={this.state.mealIds}/>
        <main>
          <Route path='/' exact>
            <Home resetMealDays={this.resetMealDays} />
          </Route>
          <Route path='/MealPrep' exact>
            <MealPrep updateMealDays={this.updateMealDays} updateDietRestrictions={this.updateDietRestrictions} mealDays={this.state.mealDays} dietRestrictions={this.state.dietRestrictions} getMeals={this.getMeals} setRecipe={this.setRecipe} recipes={this.state.recipes} meals={this.state.meals} message={this.state.message} generateMealsButton={this.state.generateMealsButton} getMealIds={this.getMealIds} />
          </Route>
          <Route path='/MealPrep/Summary'>
            <MealPrepSummary meals={this.state.meals} recipes={this.state.recipes} setRecipe={this.setRecipe} mealIds={this.state.mealIds} />
          </Route>
          <Route path='/Recipes' exact>
            <RecipeList recipes={this.state.recipes} updateSearch={this.updateSearch} recipeSearch={this.recipeSearch} />
          </Route>
          <Route path='/Recipes/:name'>
            <RecipeDetail recipeDetail={this.state.recipeDetail} recipes={this.state.recipes} setRecipe={this.setRecipeDetail} meals={this.state.meals} />
          </Route>
        </main>
        <Footer />
      </div>
    )
  }
}

export default App;

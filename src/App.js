import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

import Header from '../src/components/header/Header'
import Footer from '../src/components/footer/Footer'

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  
  render() {
    return (
      <div className='window-div'>
        <Header />
        <main>

        </main>
        <Footer />
      </div>
      )
  }
}

export default App;

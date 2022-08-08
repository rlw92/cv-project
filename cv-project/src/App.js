import React, { Component } from 'react'
import Header from './components/Header'
import './App.css'

export class App extends Component {
  constructor(props) {
    super(props)
  
    
  }


  render() {
    return (
      <div className="skltn">
        <h1>CV Builder</h1>
        <Header title="Personal Information"/>
        <Header title="About Me"/>
        <Header title="Employment History"/>
        <Header title="Education"/>
        <Header title="Contact"/>


      </div>
    )
  }
}

export default App
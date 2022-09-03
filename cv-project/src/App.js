import React, { Component } from 'react'
import Personalinfo from './components/Personalinfo'
import Education from './components/Education'
import Employment from './components/Employment'
import './App.css'

export class App extends Component {
  constructor(props) {
    super(props)

    this.state={
      PIname:""
    }

    this.pullData=this.pullData.bind(this)

  }

  pullData(data) {
    this.setState({
      PIname:data
    })  }

  render() {
    return (
      <div className="skltn">
        <h1 style={{textAlign:"center"}}>CV Builder</h1>
          <Personalinfo func={this.pullData}/>
          <Education />
          <Employment />
     <p>this: {this.state.PIname}</p>



      </div>
    )
  }
}

export default App

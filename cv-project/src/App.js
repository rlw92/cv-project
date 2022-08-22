import React, { Component } from 'react'
import Personalinfo from './components/Personalinfo'
import Education from './components/Education'
import Employment from './components/Employment'
import './App.css'

export class App extends Component {
  constructor(props) {
    super(props)
  
  }

  render() {
    return (
      <div className="skltn">
        <h1 style={{textAlign:"center"}}>CV Builder</h1>
          <Personalinfo />
          <Education />
          <Employment />
        
      {/* } {this.state.shwMdl  &&  <Modal hide={this.hideModal}/>  } 
        <Header title="Personal Information" edit={this.showModal} info={this.state.PI} fnct={this.chngePI}/>
        
        
        <Header title="About Me" edit={this.showModal} info={this.state.about} fnct={this.chngeAbout}/>
        <Header title="Employment History" edit={this.showModal} info={this.state.emplyHis}/>
        <Header title="Education" edit={this.showModal} info={this.state.education}/>
        <Header title="Contact" edit={this.showModal} info={this.state.contact}/>
        
        */ }
        

      </div>
    )
  }
}

export default App
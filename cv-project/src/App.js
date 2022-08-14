import React, { Component } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import './App.css'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      shwMdl: false,
      cvInfo: {PI:"I am Rhys from Ebbw Vale",
               about:"Hardworking,respectable",
               emplyHis:"Screwfix,School",
               education:"GCSE",
               contact:"0799999999"
            }
    }

    this.showModal = this.showModal.bind(this)
    this.hideModal = this.hideModal.bind(this)
    
  }


showModal (){
  this.setState({
    shwMdl:true
  })
}

hideModal (){
  this.setState({
    shwMdl:false
  })
}

  render() {
    return (
      <div className="skltn">
        <h1 style={{textAlign:"center"}}>CV Builder</h1>
       {this.state.shwMdl  &&  <Modal hide={this.hideModal}/>  }
        <Header title="Personal Information" edit={this.showModal}/>
        <p>{this.state.cvInfo.PI}</p>
        <Header title="About Me" edit={this.showModal}/>
        <p>{this.state.cvInfo.about}</p>
        <Header title="Employment History" edit={this.showModal}/>
        <p>{this.state.cvInfo.emplyHis}</p>
        <Header title="Education" edit={this.showModal}/>
        <p>{this.state.cvInfo.education}</p>
        <Header title="Contact" edit={this.showModal}/>
        <p>{this.state.cvInfo.contact}</p>

      </div>
    )
  }
}

export default App
import React, { Component } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import './App.css'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      shwMdl: false
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
        <Header title="About Me" edit={this.showModal}/>
        <Header title="Employment History" edit={this.showModal}/>
        <Header title="Education" edit={this.showModal}/>
        <Header title="Contact" edit={this.showModal}/>


      </div>
    )
  }
}

export default App
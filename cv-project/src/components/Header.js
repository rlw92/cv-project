import React, { Component } from 'react'
import Modal from './Modal'

export class Header extends Component {
    constructor(props) {
      super(props)

      this.state = {
        shwMdl: false
      }
      this.showModal = this.showModal.bind(this)
      this.hideModal = this.hideModal.bind(this)
      this.editInfo = this.editInfo.bind(this)
    }

    editInfo (e){
      this.setState(
        {
          
          edit: e.target.value
          
        }
        
      )
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
      <div>
      <div className="hdr">
      { this.state.shwMdl  &&  <Modal hide={this.hideModal}/>  }
      <h2>{this.props.title}</h2>
      <button onClick={this.showModal}>Edit</button>
      </div>

      <p>{this.props.info}</p>



      <input
        onChange={this.editInfo}
                
        ></input>
        <button onClick={this.props.fnct}>Edit Personal INof</button>
      </div>
    )
  }
}

export default Header
import React, { Component } from 'react'

export class Modal extends Component {
  constructor(props) {
    super(props)
  
  
  }
  render() {
    return (
        
        <div className="modal">
        
            <div className="modal-content">
            <span className="close" onClick={this.props.hide}>&times;</span>
            <p>Edit Below</p>
            <input></input>
          </div>
        
        </div>
    )
  }
}

export default Modal
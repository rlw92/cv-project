import React, { Component } from 'react'

export class Modal extends Component {
  constructor(props) {
    super(props)
  
    {/*
    this.state = {
      edit: ''
    }
  this.editInfo = this.editInfo.bind(this)
  this.onSubmitTask = this.onSubmitTask.bind(this)

  }

  editInfo (e){
    this.setState(
      {
        
        edit: e.target.value
        
      }
      
    )
  }


  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
        edit: '',
    });
  };
  
*/}
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
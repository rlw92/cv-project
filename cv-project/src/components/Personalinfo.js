import React, { Component } from 'react'


export class Personalinfo extends Component {
constructor(props) {
  super(props)

  this.state = {
      edit: "i am rhys",
     shwMdl: false,
     PI:"i am rhys"
     
  }

 
      this.showModal = this.showModal.bind(this)
      this.hideModal = this.hideModal.bind(this)
      this.editInfo = this.editInfo.bind(this)
      this.onSubmitTask = this.onSubmitTask.bind(this)


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

      editInfo (e){
        this.setState(
          {
            
            edit: e.target.value,
            
            
          }
          
        )
      }

      onSubmitTask = (e) => {
        e.preventDefault();
        this.setState({
          PI: this.state.edit,
          shwMdl: false
        });
      };

  render() {
      
    return (
        
      
        <div>
            
         { this.state.shwMdl  &&   <div className="modal">
        
        <div className="modal-content">
        <span className="close" onClick={this.hideModal}>&times;</span>
        <p>Edit Personal Information Below</p>
        <div className="inputs">
        <textarea
        onChange={this.editInfo}
        value={this.state.edit}
        type="textarea"></textarea>
        <button onClick={this.onSubmitTask}>Edit and close</button>
      </div>
      </div>
      </div>
  }
    
    


        <div className="hdr">
        <h2>Personal Information</h2>
        
        <button onClick={this.showModal}>Edit</button>
        </div>
        <p>{this.state.PI}</p>
        
        </div>
        
    )
  }
}

export default Personalinfo
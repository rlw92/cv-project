import React, { Component } from 'react'


export class Employment extends Component {
constructor(props) {
  super(props)

  this.state = {
     shwMdl: false,
     PI:"Screwfix"
     
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
            
            edit: e.target.value
            
          }
          
        )
      }

      onSubmitTask = (e) => {
        e.preventDefault();
        this.setState({
          PI: this.state.edit ,
          edit: '' ,
          shwMdl: false
        });
      };

  render() {
    return (
      
        <div>
            
         { this.state.shwMdl  &&   <div className="modal">
        
        <div className="modal-content">
        <span className="close" onClick={this.hideModal}>&times;</span>
        <p>Add Employment Information Below</p>
        <input
        onChange={this.editInfo}
        value={this.state.edit}
        type="text"></input>
        <button onClick={this.onSubmitTask}>Submit</button>

      </div>
      </div>
  }
    
    


        <div className="hdr">
        <h2>Employment</h2>
        
        <button onClick={this.showModal}>Add</button>
        </div>
        <p>{this.state.PI}</p>
        
        </div>
        
    )
  }
}

export default Employment